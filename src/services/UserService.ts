import { Service } from 'typedi';
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

@Service()
export class UserService {
  @InjectRepository() private userRep: UserRepository;
  addOne(user: User) {
    return this.userRep.save(user);
  }
  findAll() {
    return this.userRep.findAll();
  }

}