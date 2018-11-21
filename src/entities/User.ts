import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  // generated primary key in mysql
  @PrimaryGeneratedColumn()
  id: number;

  // varchar(15) in mysql
  @Column({
    type: 'varchar',
    length: 15,
    nullable: true
  })
  name: string;

  // int
  @Column('int')
  stuNo: number;

  // decimal(13, 2) in mysql
  @Column({
    type: 'decimal',
    precision: 13,
    scale: 2
  })
  score: number;

  // timestamp(3) in mysql
  @Column('timestamp', {
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
    onUpdate: 'CURRENT_TIMESTAMP(3)'
  })
  ttamp: Date;

  // timestamp(3) in mysql
  @CreateDateColumn({
    type: 'timestamp'
  })
  createAt: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(3)',
    precision: 3
  })
  updateAt: Date
}