import { ResponseFormat } from '@common/utils/response.util';
import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiExtraModels,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const ApiAuthMetadata = (tag: string) => {
  return applyDecorators(
    ApiTags(tag),
    ApiBearerAuth('Authorization'),
    ApiUnauthorizedResponse({
      description: '認証が必要です。',
    }),
    ApiExtraModels(ResponseFormat),
  );
};
