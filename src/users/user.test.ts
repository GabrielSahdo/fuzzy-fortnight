import { beforeAll, describe, expect, it } from 'bun:test'
import { Server } from '../server';
import Elysia from 'elysia';
import { postRequest } from '../utils/request.util';

describe('Elysia', () => {
    let server: Server;
    let app: Elysia;
    const basePathUrl = 'http://localhost:3000';

    beforeAll(() => {
        console.log("before all");

        server = new Server(Number(process.env.PORT));
        server.start();

        app = server.app as Elysia;
    })

    describe('POST /users/', () => {
        it('should create a user and return it', async () => {

            const user: any = {
                name: 'John Doe',
                email: 'jhon@email.com',
            }

            const response = await app.handle(postRequest(
                `${basePathUrl}/users/`,
                user
            ));

            const body = await response.json();

            expect(response.status).toBe(200);
            expect(body).toHaveProperty('id', expect.any(Number));
            expect(body).toHaveProperty('name', user.name);
            expect(body).toHaveProperty('email', user.email);
        })

        it('should return an error if the user is invalid', async () => {
            const user: any = {
                name: 'John Doe',
            }

            const response = await app.handle(postRequest(
                `${basePathUrl}/users/`,
                user
            ));

            const error = await response.text();

            expect(response.status).toBe(400);
            expect(error).toBeString();
        })
    })

    describe('GET /users/', () => {
        it('return a response', async () => {
            const app = server.app as Elysia;

            const response = await app.handle(
                new Request('http://localhost:3000/users/')
            ).then(res => res.json())

            expect(response).toHaveProperty('users', expect.any(Array))
        })
    })
})