import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const order = await prisma.addresses.update({
        where: {id: Number(event.context.params.id)},
        data: {
            userId: body.userId,
            name: body.name,
            address: body.address,
            zipcode: body.zipcode,
            city: body.city,
            Country: body.country
        }
    })

    return res

})
