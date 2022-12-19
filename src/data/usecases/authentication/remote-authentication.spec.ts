
import { RemoteAuthentication } from './remote-authenticator'
import { HttpPostClientSpy } from '../../tests/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Shold call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()

    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    /** Garantes que a url do construtor seja a mesma passao pelo parametro */
    expect(httpPostClientSpy.url).toBe(url)
  })
})
