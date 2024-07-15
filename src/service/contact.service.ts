import { User } from "@prisma/client";
import {
  ContactResponse,
  CreateContactRequest,
  toContactResponse,
} from "../model/contact.model";
import { ContactValidation } from "../validation/contact.validation";
import { prismaClient } from "../application/database";
import { Validation } from "../validation/validation";

export class ContactService {
  static async create(
    user: User,
    requesst: CreateContactRequest,
  ): Promise<ContactResponse> {
    const createRequest = Validation.validate(
      ContactValidation.CREATE,
      requesst,
    );

    const record = {
      ...createRequest,
      ...{ username: user.username },
    };

    const contact = await prismaClient.contact.create({
      data: record,
    });

    return toContactResponse(contact);
  }
}
