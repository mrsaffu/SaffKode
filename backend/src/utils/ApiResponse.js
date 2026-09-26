/**
 * ApiResponse — standard success envelope. Every successful endpoint
 * responds via ApiResponse.send() so the shape is identical everywhere:
 * { success, data, message, meta }.
 */
export class ApiResponse {
  constructor(statusCode, data = {}, message = 'Success', meta = {}) {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.data = data;
    this.message = message;
    this.meta = meta;
  }

  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      data: this.data,
      message: this.message,
      meta: this.meta,
    });
  }

  static ok(res, data, message = 'Success', meta = {}) {
    return new ApiResponse(200, data, message, meta).send(res);
  }

  static created(res, data, message = 'Created') {
    return new ApiResponse(201, data, message).send(res);
  }
}

export default ApiResponse;
