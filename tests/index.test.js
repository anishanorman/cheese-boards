const { db, User, Board, Cheese } = require("../db/db.js");
const createTables = require("../src/index.js");

    test("User table exists", async () => {
        const data = await db.getQueryInterface().showAllSchemas()
        expect(data[0].name).toBe("Users")
    })
    
    test("Board table exists", async () => {
        const data = await db.getQueryInterface().showAllSchemas()
        expect(data[1].name).toBe("Boards")
    })

    test("Cheese table exists", async () => {
        const data = await db.getQueryInterface().showAllSchemas()
        expect(data[2].name).toBe("Cheeses")
    })