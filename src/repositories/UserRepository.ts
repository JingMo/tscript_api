import { Service } from 'typedi';
import { Repository, EntityRepository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../entities/User';

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // add
  async addOne(user: User): Promise<User> {
    return this.save(user);
  }

  // find
  async findAll(): Promise<User[]> {
    return this.find();
  }
  async findSelect(conditions: Object): Promise<Array<Object>> {
    const [data, count] = await this.findAndCount(conditions);
    return [data, count];
  }
  async findOne(conditions: Object): Promise<User> {
    return this.findOne(conditions);
  }
  /*
  this.find({
    select: ['id', 'name'], //列出指定的列
    where: {
      id: LessThan(10), // where id < 10
      id: MoreThan(10), // where id > 10
      id: Equal(10), // where id = 10
      id: Like(%1%), // where id like %1%
      id: Between(1, 10), // where id between 1 and 10
      id: In([1, 2]), // where id in(1, 2)
      id: IsNull(), // where id is Null,
      id: Not(MoreThan(10))
    },
    order: { 'id': 'ASC' },
    skip: 5,
    take: 10
  })
   */

  // update
  async update(conditions: Object, update: Object): Promise<UpdateResult> {
    return this.update(conditions, update);
  }

  // delete
  async delete(conditions: Object): Promise<DeleteResult> {
    return this.delete(conditions);
    // return this.remove();
    // 删除不存在的实体：remove会报错，delete返回undefined
  }
  async deleteByIds(ids: Array<number>): Promise<DeleteResult> {
    return this.deleteByIds(ids);
  }
}