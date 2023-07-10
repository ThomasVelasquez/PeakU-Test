import { expect } from '@jest/globals';
import { appErrorHandler } from '../appErrorHandler';

describe('App Error Handler', () => {
    it("Valid Message and Status Code", () => {
        const message = "Valid message";
        const statusCode = 200;
        const result = appErrorHandler({ message, statusCode });
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe(message);
        expect(result.statusCode).toBe(statusCode);
    });
});
