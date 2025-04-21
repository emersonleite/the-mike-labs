import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1734981803900 implements MigrationInterface {
  name = 'InitialMigration1734981803900';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "notice" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar(50) NOT NULL, "description" varchar(250) NOT NULL, "priority" varchar NOT NULL, "status" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`,
    );
    await queryRunner.query(
      `CREATE TABLE "resident" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(50) NOT NULL, "email" varchar NOT NULL, "apartment" varchar NOT NULL, "building" varchar NOT NULL, "passwordHash" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_593499261b759111bdfbea7d998" UNIQUE ("email"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "resident"`);
    await queryRunner.query(`DROP TABLE "notice"`);
  }
}
