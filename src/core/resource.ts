// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Appclassifier } from '../client';

export abstract class APIResource {
  protected _client: Appclassifier;

  constructor(client: Appclassifier) {
    this._client = client;
  }
}
