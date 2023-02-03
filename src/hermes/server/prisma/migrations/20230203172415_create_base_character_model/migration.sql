-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "player_name" TEXT NOT NULL,
    "character_name" TEXT NOT NULL,
    "paranormal_exposure_level" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "trail" TEXT NOT NULL,
    "healthStatus" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attributes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_attributes" (
    "characterId" TEXT NOT NULL,
    "attributeId" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "character_attributes_pkey" PRIMARY KEY ("characterId","attributeId")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_skills" (
    "characterId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "character_skills_pkey" PRIMARY KEY ("characterId","skillId")
);

-- AddForeignKey
ALTER TABLE "character_attributes" ADD CONSTRAINT "character_attributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_attributes" ADD CONSTRAINT "character_attributes_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
