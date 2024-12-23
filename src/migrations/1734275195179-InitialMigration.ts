import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1734275195179 implements MigrationInterface {
    name = 'InitialMigration1734275195179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "resident" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(50) NOT NULL, "email" varchar NOT NULL, "apartment" varchar NOT NULL, "building" varchar NOT NULL, "password" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "notice" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar(50) NOT NULL, "description" varchar(250) NOT NULL, "priority" varchar NOT NULL, "status" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "notice"`);
        await queryRunner.query(`DROP TABLE "resident"`);
    }

}
