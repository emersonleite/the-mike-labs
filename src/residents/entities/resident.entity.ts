import { Exclude } from "class-transformer";
import { Notice } from "../../notices/entities/notice.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Resident {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ unique: true }) // Garante que o e-mail seja único no banco
  email: string;

  @Column({ type: "varchar" })
  apartment: string;

  @Column({ type: "varchar" })
  building: string; // Bloco do condomínio

  @Column()
  @Exclude() // Exclui, na resposta, o envio do campo passwordHash
  passwordHash: string;

  @Column({ type: "varchar" })
  phone: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  // Relacionamento de um residente para muitos avisos, pois
  // um residente pode criar vários avisos
  @OneToMany(() => Notice, (notice) => notice.createdBy)
  notices: Notice[];
}
