describe('Hello Github Packages', () => {
    it('Should Load Package Registry by Github', () => {
        const HelloGithubPackages = require('@guilouro/hello-github-packages')
        expect(HelloGithubPackages.Hi()).toBe('Github Packages works fine!')
    })
})