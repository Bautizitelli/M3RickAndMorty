const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const character={
    id:923,
    name:'Bauti',
    species:'Human',
    gender:'Male',
    status:'Alive',
    origin:{
        name:'Earth (C-137)'
    },
    image:'image.jpg'
}

describe('test de RUTAS',()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200',async()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades:"id", "name", "species", "gender", "status", "origin" e "image"',
        async ()=>{
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty("id")
            expect(response.body).toHaveProperty("name")
            expect(response.body).toHaveProperty("species")
            expect(response.body).toHaveProperty("gender")
            expect(response.body).toHaveProperty("status")
            expect(response.body).toHaveProperty("origin")
            expect(response.body).toHaveProperty("image")
        })
        it('Si hay un error responde con status: 500',async()=>{
            const response = await agent.get('/rickandmorty/character/1111a');
            expect(response.statusCode).toBe(500)
        })
    })
    describe('GET /rickandmorty/login',()=>{

        it('Responde con un objeto con la propiedad access en true si la informacion del usuario es valida',
        async ()=>{
            const response = await agent.get('/rickandmorty/login?email=bautista.zitelli11@gmail.com&password=ejemplo123')
            const access = {access:true}
            expect(response.body).toEqual(access)
        })

        it('Responde con un objeto con la propiedad access en false si la informacion del usuario no es valida',
        async()=>{
            const response = await agent.get('/rickandmorty/login?email=hola@gmail.com&password=abc123')
            const access = {access:false}
            expect(response.body).toEqual(access)
        })
    })
    describe("POST /rickandmorty/fav",()=>{

        it('Debe guardar el personaje en favoritos',async()=>{
            const response = await agent.post('/rickandmorty/fav')
            .send(character);
            expect(response.body).toContainEqual(character)
        })

        it('Debe agregar personajes a favoritos manteniendo los personajes que ya estén',async()=>{
            character.id = 1000;
            character.name = 'pepito'
            const response = await agent.post('/rickandmorty/fav')
            .send(character);
            expect(response.body.length).toBe(2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id",()=>{

        it('Si no existen personajes con el ID enviado deberia devolver los favoritos anteriores sin modificar', async()=>{
            const response = await agent.delete('/rickandmorty/fav/2334')
            expect(response.body.length).toBe(2)
        })

        it('Se debe eliminar el personaje cuando se envía un ID válido', async()=>{
            const response = await agent.delete('/rickandmorty/fav/1000')
            expect(response.body.length).toBe(1)
        })
    })
})