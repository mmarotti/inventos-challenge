import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "reservations",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      reservationId: uuid.v1(),
      client_name: data.client_name,
      email: data.email,
      phone: data.phone,
      minion: data.minion,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
