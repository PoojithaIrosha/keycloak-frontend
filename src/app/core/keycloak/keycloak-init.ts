import { KeycloakOptions, KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {

  const options: KeycloakOptions = {
    config: {
      url: 'http://localhost:8080',
      realm: 'keycloak-integration',
      clientId: 'keycloak-integration'
    },
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'check-sso',
      flow: 'standard',
      checkLoginIframe: true
    },
    enableBearerInterceptor: true,
    bearerPrefix: 'Bearer'
  };

  return () => keycloak.init(options);
}
