import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1783954332623 implements MigrationInterface {
    name = 'CreateUser1783954332623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`nom\` varchar(255) NOT NULL, \`prenom\` varchar(255) NOT NULL, \`telephone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`motDepasse\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`dateCreation\` datetime NOT NULL, \`dateModification\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
