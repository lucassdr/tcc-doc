export const imports = {
  'documentacao/croqui.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "documentacao-croqui" */ 'documentacao/croqui.mdx'
    ),
  'documentacao/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "documentacao-index" */ 'documentacao/index.mdx'
    ),
  'documentacao/info_tech.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "documentacao-info-tech" */ 'documentacao/info_tech.mdx'
    ),
  'documentacao/objetivos.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "documentacao-objetivos" */ 'documentacao/objetivos.mdx'
    ),
  'documentacao/registro.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "documentacao-registro" */ 'documentacao/registro.mdx'
    ),
  'documentacao/versao.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "documentacao-versao" */ 'documentacao/versao.mdx'
    ),
}
