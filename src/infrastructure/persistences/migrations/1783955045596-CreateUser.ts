import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1783955045596 implements MigrationInterface {
    name = 'CreateUser1783955045596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('ADMIN', 'AGENT', 'PROPRIETAIRE') NOT NULL DEFAULT 'PROPRIETAIRE'`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`dateCreation\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`dateCreation\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`dateModification\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`dateModification\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`dateModification\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`dateModification\` datetime(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`dateCreation\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`dateCreation\` datetime(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` varchar(255) NOT NULL`);
    }

}
