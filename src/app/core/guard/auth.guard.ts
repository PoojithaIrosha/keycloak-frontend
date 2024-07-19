import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export const authGuard: CanActivateFn = (route, state) => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);
  const authorities = [...keycloak.getUserRoles()];

  return new Promise(async (resolve, reject) => {
    if (!await keycloak.isLoggedIn()) {
      await keycloak.login();
      return resolve(false);
    }

    const requiredRoles = route.data['authorities'] as string[];

    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      resolve(true);
    }

    resolve(requiredRoles.every((role) => authorities.includes(role)));
  });
};
