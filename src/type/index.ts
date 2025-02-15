export type ApiError = {
    status: number;
    data: {
      statusCode: number;
      message?: string;
      fieldErrors?: { field: string; message: string }[];
    };
  };
  
  