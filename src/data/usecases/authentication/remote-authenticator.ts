/* eslint-disable @typescript-eslint/no-unused-vars */

import { HttpPostClient } from '../../protocols/http-post-client'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async auth (): Promise<void> {
    await this.httpClient.post({
      url: this.url
    })
  }
}
