import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
    let result;
    //return prisma.user.create({ data: {name: 'Pandiaraan'}}); 

    // result = await prisma.user.create({
    //     data: {
    //         name: 'Pandiarajan',
    //         email: 'test@gmail.com',
    //         preferences: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     // include: {
    //     //     preferences: true
    //     // },
    //     select: {
    //         name: true,
    //         preferences: {
    //             select: {
    //                 emailUpdates: true
    //             }
    //         }
    //     }
    // });

    /*return 
    result = prisma.user.create({
        data: {
            name: 'Pandiarajan',
            email: 'test@gmail.com',
            preferences: {
                create: {
                    emailUpdates: true
                }
            }
        },
        // include: {
        //     preferences: true
        // },
        select: {
            name: true,
            preferences: {
                select: {
                    emailUpdates: true
                }
            }
        }
    });*/

    //query compound index
    // result = prisma.user.findUnique({
    //     where: {
    //         age_name: {
    //             age: 27,
    //             name: 'Pandiarajan'

    //         }
    //     }
    //     }),

    //await prisma.user.deleteMany();
    // find unique record
    // result = prisma.user.findUnique({
    //     where: {
    //         email: 'test@gmail.com'
    //     },
    //     // include: {
    //     //     preferences: true
    //     // },
    //     select: {
    //         name: true,
    //         id: true,
    //         preferences: {
    //             select: {
    //                 emailUpdates: true
    //             }
    //         }
    //     }
    // });

    //find with pagination
    // result = await prisma.user.findMany({
    //     where: {
    //         email: 'test@gmail.com'
    //     },
    //     // include: {
    //     //     preferences: true
    //     // },
    //     select: {
    //         name: true,
    //         id: true,
    //         preferences: {
    //             select: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     take: 2, //limit
    //     skip: 0 //offset
    // });

    // query with query contraints
    // result = prisma.user.findMany({
    //     where: {
    //         name: {
    //             equals: "Pandiarajan",
    //             //not
    //             //notIn,
    //             //contains
    //             //startsWith
    //             //endsWith
    //         }
    //     }
    // });

    // query with conditions
    // result = prisma.user.findMany({
    //     where: {
    //         AND: [
    //             {
    //                 name: {
    //                     equals: "Pandiarajan"
    //                 }
    //             },
    //             {
    //                 email: {
    //                     equals: "pandi"
    //                 }
    //             }
    //         ],
    //         // NOT
    //         // OR: 
    //     }
    // });

    // query with reference
    // result = prisma.user.findMany({
    //     where: {
    //         writtenPosts: {
    //             every: {
    //                 title: 'test'
    //             },
    //             none: {
    //                 title: ''
    //             },
    //             some: {
    //                 title: {
    //                     startsWith: 'bank'
    //                 }
    //             }
    //         }
    //     }
    // });

    // update query
    // result = await prisma.user.update({
    //     where: {
    //         email: "test@gmail.com"
    //     },
    //     data: {
    //         name: "Pandiarajan Rajagopal",
    //         age: {
    //             increment: 1
    //         }
    //     }
    // });

    // update the existing mapping
    // result = await prisma.user.update({
    //     where: {
    //         email: "test@gmail.com"
    //     },
    //     data: {
    //         preference: {
    //             connect: {
    //                 id: 'uuid'
    //             }
    //         }
    //     }
    // });

    // remove the existing mapping
    // result = await prisma.user.update({
    //     where: {
    //         email: "test@gmail.com"
    //     },
    //     data: {
    //         preference: {
    //             disconnect: {
    //                 id: 'uuid'
    //             }
    //         }
    //     }
    // });

    //delete record
    result = await prisma.user.delete({
        where: {
            email: 'test@gmail.com'
        }
    })

    return result;
}

main()
    .then(res => {
        console.log('SUCCESS ::', JSON.stringify(res, null, 2))
    })
    .catch(error => {
        console.log('ERROR ::', error)
    })
    .finally(() => {
        prisma.$disconnect()
    })