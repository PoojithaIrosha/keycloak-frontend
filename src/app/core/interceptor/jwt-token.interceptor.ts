import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export const jwtTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Adding JWT token to the request');
  const keycloakService: KeycloakService = inject(KeycloakService);

  keycloakService.getToken().then(token => {
    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
    return next(authReq);
  });

  return next(req);
};
