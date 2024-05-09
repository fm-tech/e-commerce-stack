import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let res = await prisma.addresses.findMany({
        where: { usertId: event.context.params.id }
    })
    return res
})
