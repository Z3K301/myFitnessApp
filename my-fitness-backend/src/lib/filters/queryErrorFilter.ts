import { ArgumentsHost, BadRequestException, Catch, ConflictException, Logger } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { QueryFailedError } from "typeorm";

@Catch(QueryFailedError)
export class QueryErrorFilter extends BaseExceptionFilter {
  public catch(exception: any, host: ArgumentsHost): any {
    switch (exception.sqlState) {
      case "23000":
        Logger.error(exception.sqlState, "Try to delete a entity that has relations");
        return super.catch(new ConflictException(), host);
      default:
        Logger.error(exception);
    }

    return super.catch(new BadRequestException({ status: 504, message: 'Algo ha ido mal' }), host);
  }
}