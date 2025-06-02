import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'slidespdf',
  isDefault: true,
   access: (allow) => ({
    'public/*': [
        allow.guest.to(['read']),
        allow.authenticated.to(['read']),
    ]
   })
});
