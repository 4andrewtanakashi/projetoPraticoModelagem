export class UnavailableServiceError extends Error {
  constructor() {
    super('Serviço indisponível!');
    super.name = 'UnavailableServiceError';
  }
}
