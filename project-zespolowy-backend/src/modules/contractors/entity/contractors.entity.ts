import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contractors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  postcode: string;

  @Column()
  email: string;

  @Column()
  phonenumber: string;

  @Column()
  nip: string;

  @Column()
  regon: string;
}
