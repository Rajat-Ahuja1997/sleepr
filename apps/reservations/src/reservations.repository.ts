import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ReservationsRepository extends AbstractRepository<Reservation> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectRepository(Reservation)
    reservationsRepository: Repository<Reservation>,
    entityManager: EntityManager,
  ) {
    super(reservationsRepository, entityManager);
  }
}
