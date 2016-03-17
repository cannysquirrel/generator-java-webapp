<#import '../../inc/inc.ftl' as inc>

<@inc.header '演示页'>
</@inc.header>

<@inc.body '演示页'>

  <@inc.breadcrumb [['首页', ''], ['演示页', '']]></@inc.breadcrumb>

  <div id="contents">
  </div>

  <#include '../menu.ftl'>
</@inc.body>

<@inc.footer>
  <script src="${tinymceUrl}"></script>
  <script>
    seajs.use('demo/form/index');
  </script>
</@inc.footer>
