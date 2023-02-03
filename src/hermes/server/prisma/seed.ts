import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const characterAttributes = await prisma.characterAttributes.findMany();
  const attributes = await prisma.attribute.findMany();
  const characterSkills = await prisma.characterSkills.findMany();
  const skills = await prisma.skill.findMany();

  if (characterAttributes.length !== 0) {
    await prisma.characterAttributes.deleteMany();
  }

  if (attributes.length !== 0) {
    await prisma.attribute.deleteMany();
  }

  if (characterSkills.length !== 0) {
    await prisma.characterSkills.deleteMany();
  }

  if (skills.length !== 0) {
    await prisma.skill.deleteMany();
  }

  await Promise.all([
    prisma.attribute.create({
      data: {
        name: 'Agilidade',
      },
    }),
    prisma.attribute.create({
      data: {
        name: 'Força',
      },
    }),
    prisma.attribute.create({
      data: {
        name: 'Intelecto',
      },
    }),
    prisma.attribute.create({
      data: {
        name: 'Presença',
      },
    }),
    prisma.attribute.create({
      data: {
        name: 'Vigor',
      },
    }),
  ]);

  await Promise.all([
    prisma.skill.create({
      data: {
        name: 'Acrobacia',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Adestramento',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Artes',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Atletismo',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Atualidades',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Ciências',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Crime',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Diplomacia',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Enganação',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Fortitude',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Furtividade',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Iniciativa',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Intimidação',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Intuição',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Investigação',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Luta',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Medicina',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Ocultismo',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Percepção',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Pilotagem',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Pontaria',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Profissão',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Reflexos',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Religião',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Sobrevivência',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Tática',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Tecnologia',
      },
    }),

    prisma.skill.create({
      data: {
        name: 'Vontade',
      },
    }),
  ]);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
