import {AxiosError} from "axios";
import consola from "consola";
import {DateTime} from "luxon";
import {createNotification} from "./notifications";

export default function onError(error: Error | AxiosError | unknown) {
  let errorMessage = `Unknown error (${error})`;
  let errorCode: number | null = null;

  if(error instanceof Error) {
    errorMessage = error.message ?? String(error);
  }

  if(error instanceof AxiosError) {
    if(error.response) {
      errorCode = error.response.status;

      // Here is getting error message from server
      errorMessage = error.response.data;
    }
    else {
      errorMessage = error.message;
    }
  }

  consola.error(error);
  createNotification({
    icon: "error-lined",
    expireDate: DateTime.now().plus({seconds: 5}).toISO(),
    title: `Error${errorCode ? ` #${errorCode}` : ""}`,
    contents: errorMessage
  });
}
