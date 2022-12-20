import{aP as t,V as d,W as a,X as i,ad as e,af as r,aQ as s,G as l}from"./framework-2a18b220.js";const u={},v=s(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install requests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="标准请求" tabindex="-1"><a class="header-anchor" href="#标准请求" aria-hidden="true">#</a> 标准请求</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests
def resp(url):
    # 头部
    headers = {
        &#39;Cookie&#39;:&#39;&#39;,
        &#39;User-Agent&#39;:&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36&#39;
    }

    # 请求资源
    json = {}

    # 代理
    proxy = &#39;127.0.0.1:7890&#39;
    proxies = {
        &#39;http&#39;: proxy,
        &#39;https&#39;: proxy
    }
    url = url
    response = requests.get(url=url,data=json,headers=headers,proxies=proxies,verify=False)
    print(response.content.decode())

if __name__ == &#39;__main__&#39;:
    resp(&quot;&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h1><h2 id="http-请求类型" tabindex="-1"><a class="header-anchor" href="#http-请求类型" aria-hidden="true">#</a> HTTP 请求类型</h2><p>get,post,put,delete,head,options</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests

r = requests.get(&#39;https://api.github.com/events&#39;)
r = requests.post(&#39;https://httpbin.org/post&#39;, data={&#39;key&#39;: &#39;value&#39;})
r = requests.put(&#39;https://httpbin.org/put&#39;, data={&#39;key&#39;: &#39;value&#39;})
r = requests.delete(&#39;https://httpbin.org/delete&#39;)
r = requests.head(&#39;https://httpbin.org/get&#39;)
r = requests.options(&#39;https://httpbin.org/get&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-url-中传递参数" tabindex="-1"><a class="header-anchor" href="#在-url-中传递参数" aria-hidden="true">#</a> 在 URL 中传递参数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>payload = {&#39;key1&#39;: &#39;value1&#39;, &#39;key2&#39;: &#39;value2&#39;}
r = requests.get(&#39;https://httpbin.org/get&#39;, params=payload)
print(r.url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回复内容" tabindex="-1"><a class="header-anchor" href="#回复内容" aria-hidden="true">#</a> 回复内容</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests

r = requests.get(&#39;https://api.github.com/events&#39;)
r.text
&#39;[{&quot;repository&quot;:{&quot;open_issues&quot;:0,&quot;url&quot;:&quot;https://github.com/...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>r.encoding = &#39;ISO-8859-1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二进制响应内容" tabindex="-1"><a class="header-anchor" href="#二进制响应内容" aria-hidden="true">#</a> 二进制响应内容</h2><p>对于非文本请求，您还可以将响应正文作为字节访问：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.content
b&#39;[{&quot;repository&quot;:{&quot;open_issues&quot;:0,&quot;url&quot;:&quot;https://github.com/...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>gzip 和 deflate 传输编码会自动为您解码。</p><p>如果安装了 brotli 或 brotlicffi 等 Brotli 库，则会自动为您解码 br 传输编码。</p><p>例如，要从请求返回的二进制数据创建图像，您可以使用以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from PIL import Image
from io import BytesIO

i = Image.open(BytesIO(r.content))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json响应内容" tabindex="-1"><a class="header-anchor" href="#json响应内容" aria-hidden="true">#</a> JSON响应内容</h2><p>还有一个内置的 JSON 解码器，以防您处理 JSON 数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; import requests

&gt;&gt;&gt; r = requests.get(&#39;https://api.github.com/events&#39;)
&gt;&gt;&gt; r.json()
[{&#39;repository&#39;: {&#39;open_issues&#39;: 0, &#39;url&#39;: &#39;https://github.com/...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 JSON 解码失败，r.json() 会引发异常。例如，如果响应收到 204（无内容），或者如果响应包含无效的 JSON，则尝试 r.json() 会引发 requests.exceptions.JSONDecodeError。此包装异常为不同 python 版本和 json 序列化库可能引发的多个异常提供互操作性。</p><p>需要注意的是，调用 r.json() 成功并不代表响应成功。某些服务器可能会在失败的响应中返回 JSON 对象（例如 HTTP 500 的错误详细信息）。这样的 JSON 将被解码并返回。要检查请求是否成功，请使用 r.raise_for_status() 或检查 r.status_code 是否符合您的预期。</p><h2 id="原始响应内容" tabindex="-1"><a class="header-anchor" href="#原始响应内容" aria-hidden="true">#</a> 原始响应内容</h2><p>在极少数情况下，您想从服务器获取原始套接字响应，您可以访问 r.raw。如果您想这样做，请确保在您的初始请求中设置 stream=True。完成后，您可以执行以下操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(&#39;https://api.github.com/events&#39;, stream=True)

&gt;&gt;&gt; r.raw
&lt;urllib3.response.HTTPResponse object at 0x101194810&gt;

&gt;&gt;&gt; r.raw.read(10)
&#39;\\x1f\\x8b\\x08\\x00\\x00\\x00\\x00\\x00\\x00\\x03&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，一般来说，您应该使用这样的模式来保存正在流式传输到文件的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with open(filename, &#39;wb&#39;) as fd:
    for chunk in r.iter_content(chunk_size=128):
        fd.write(chunk)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Response.iter_content 将处理很多您在直接使用 Response.raw 时必须处理的事情。流式传输下载时，以上是检索内容的首选和推荐方式。请注意，chunk_size 可以自由调整为更适合您的用例的数字。</p><p>笔记</p><p>关于使用 Response.iter_content 与 Response.raw 的重要说明。 Response.iter_content 将自动解码 gzip 和 deflate 传输编码。 Response.raw 是一个原始的字节流——它不会转换响应内容。如果您确实需要访问返回的字节，请使用 Response.raw。</p><h2 id="自定义header" tabindex="-1"><a class="header-anchor" href="#自定义header" aria-hidden="true">#</a> 自定义Header</h2><p>如果您想将 HTTP 标头添加到请求中，只需将 dict 传递给 headers 参数。</p><p>例如，我们没有在前面的例子中指定我们的用户代理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>url = &#39;https://api.github.com/some/endpoint&#39;
headers = {&#39;user-agent&#39;: &#39;my-app/0.0.1&#39;}
r = requests.get(url, headers=headers)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：自定义标题的优先级低于更具体的信息源。例如：</p><ul><li>如果在 .netrc 中指定了凭据，则使用 headers= 设置的授权标头将被覆盖，而 .netrc 又将被 auth= 参数覆盖。请求将在 <sub>/.netrc、</sub>/_netrc 或 NETRC 环境变量指定的路径中搜索 netrc 文件。</li><li>如果您被重定向到主机外，授权标头将被删除。</li><li>Proxy-Authorization 标头将被 URL 中提供的代理凭据覆盖。</li><li>当我们可以确定内容的长度时，Content-Length 标头将被覆盖。</li></ul><p>此外，Requests 根本不会根据指定的自定义标头更改其行为。标头只是简单地传递到最终请求中。</p><p>注意：所有标头值必须是字符串、字节串或 unicode。在允许的情况下，建议避免传递 unicode 标头值。</p><h2 id="更复杂的-post-请求" tabindex="-1"><a class="header-anchor" href="#更复杂的-post-请求" aria-hidden="true">#</a> 更复杂的 POST 请求</h2><p>通常，您希望发送一些表单编码的数据——很像 HTML 表单。为此，只需将字典传递给 data 参数。发出请求时，您的数据字典将自动进行表单编码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>payload = {&#39;key1&#39;: &#39;value1&#39;, &#39;key2&#39;: &#39;value2&#39;}
r = requests.post(&quot;https://httpbin.org/post&quot;, data=payload)
print(r.text)
{
  ...
  &quot;form&quot;: {
    &quot;key2&quot;: &quot;value2&quot;,
    &quot;key1&quot;: &quot;value1&quot;
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data 参数也可以为每个键有多个值。这可以通过使数据成为元组列表或以列表作为值的字典来完成。当表单有多个使用相同键的元素时，这特别有用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; payload_tuples = [(&#39;key1&#39;, &#39;value1&#39;), (&#39;key1&#39;, &#39;value2&#39;)]
&gt;&gt;&gt; r1 = requests.post(&#39;https://httpbin.org/post&#39;, data=payload_tuples)
&gt;&gt;&gt; payload_dict = {&#39;key1&#39;: [&#39;value1&#39;, &#39;value2&#39;]}
&gt;&gt;&gt; r2 = requests.post(&#39;https://httpbin.org/post&#39;, data=payload_dict)
&gt;&gt;&gt; print(r1.text)
{
  ...
  &quot;form&quot;: {
    &quot;key1&quot;: [
      &quot;value1&quot;,
      &quot;value2&quot;
    ]
  },
  ...
}
&gt;&gt;&gt; r1.text == r2.text
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时您可能希望发送未进行表单编码的数据。如果您传入一个字符串而不是一个字典，则该数据将直接发布。</p><p>例如，GitHub API v3 接受 JSON 编码的 POST/PATCH 数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; import json

&gt;&gt;&gt; url = &#39;https://api.github.com/some/endpoint&#39;
&gt;&gt;&gt; payload = {&#39;some&#39;: &#39;data&#39;}

&gt;&gt;&gt; r = requests.post(url, data=json.dumps(payload))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，上面的代码不会添加 Content-Type 标头（因此特别是它不会将其设置为 application/json）。</p><p>如果您需要该标头集并且您不想自己对字典进行编码，您也可以使用 json 参数（在 2.4.2 版本中添加）直接传递它，它将自动编码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;https://api.github.com/some/endpoint&#39;
&gt;&gt;&gt; payload = {&#39;some&#39;: &#39;data&#39;}
&gt;&gt;&gt; r = requests.post(url, json=payload)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，如果传递数据或文件，则忽略 json 参数。</p><h2 id="发布一个多部分编码的文件" tabindex="-1"><a class="header-anchor" href="#发布一个多部分编码的文件" aria-hidden="true">#</a> 发布一个多部分编码的文件</h2><p>Requests 让上传多部分编码文件变得简单：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;https://httpbin.org/post&#39;
&gt;&gt;&gt; files = {&#39;file&#39;: open(&#39;report.xls&#39;, &#39;rb&#39;)}

&gt;&gt;&gt; r = requests.post(url, files=files)
&gt;&gt;&gt; r.text
{
  ...
  &quot;files&quot;: {
    &quot;file&quot;: &quot;&lt;censored...binary...data&gt;&quot;
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以显式设置文件名、内容类型和标题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;https://httpbin.org/post&#39;
&gt;&gt;&gt; files = {&#39;file&#39;: (&#39;report.xls&#39;, open(&#39;report.xls&#39;, &#39;rb&#39;), &#39;application/vnd.ms-excel&#39;, {&#39;Expires&#39;: &#39;0&#39;})}

&gt;&gt;&gt; r = requests.post(url, files=files)
&gt;&gt;&gt; r.text
{
  ...
  &quot;files&quot;: {
    &quot;file&quot;: &quot;&lt;censored...binary...data&gt;&quot;
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要，您可以发送要作为文件接收的字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;https://httpbin.org/post&#39;
&gt;&gt;&gt; files = {&#39;file&#39;: (&#39;report.csv&#39;, &#39;some,data,to,send\\nanother,row,to,send\\n&#39;)}

&gt;&gt;&gt; r = requests.post(url, files=files)
&gt;&gt;&gt; r.text
{
  ...
  &quot;files&quot;: {
    &quot;file&quot;: &quot;some,data,to,send\\\\nanother,row,to,send\\\\n&quot;
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您将一个非常大的文件作为多部分/表单数据请求发布，您可能需要流式传输请求。默认情况下，requests 不支持此功能，但有一个单独的包支持 - requests-toolbelt。您应该阅读工具带的文档以获取有关如何使用它的更多详细信息。</p><p>要在一个请求中发送多个文件，请参阅高级部分。</p><p>警告</p><p>强烈建议您以二进制模式打开文件。这是因为 Requests 可能会尝试为您提供 Content-Length 标头，如果这样做，此值将设置为文件中的字节数。如果以文本模式打开文件，可能会出现错误。</p><h2 id="响应状态代码" tabindex="-1"><a class="header-anchor" href="#响应状态代码" aria-hidden="true">#</a> 响应状态代码</h2><p>我们可以查看响应状态码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(&#39;https://httpbin.org/get&#39;)
&gt;&gt;&gt; r.status_code
200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Requests 还带有一个内置的状态码查找对象，以便于参考：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.status_code == requests.codes.ok
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们发出了错误的请求（4XX 客户端错误或 5XX 服务器错误响应），我们可以使用 Response.raise_for_status() 引发它：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; bad_r = requests.get(&#39;https://httpbin.org/status/404&#39;)
&gt;&gt;&gt; bad_r.status_code
404

&gt;&gt;&gt; bad_r.raise_for_status()
Traceback (most recent call last):
  File &quot;requests/models.py&quot;, line 832, in raise_for_status
    raise http_error
requests.exceptions.HTTPError: 404 Client Error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，由于 r 的 status_code 是 200，所以当我们调用 raise_for_status() 时，我们得到：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.raise_for_status()
None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一切都很好。</p><h2 id="响应标头" tabindex="-1"><a class="header-anchor" href="#响应标头" aria-hidden="true">#</a> 响应标头</h2><p>我们可以使用 Python 字典查看服务器的响应头：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.headers
{
    &#39;content-encoding&#39;: &#39;gzip&#39;,
    &#39;transfer-encoding&#39;: &#39;chunked&#39;,
    &#39;connection&#39;: &#39;close&#39;,
    &#39;server&#39;: &#39;nginx/1.0.4&#39;,
    &#39;x-runtime&#39;: &#39;148ms&#39;,
    &#39;etag&#39;: &#39;&quot;e1ca502697e5c9317743dc078f67693f&quot;&#39;,
    &#39;content-type&#39;: &#39;application/json&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，字典很特别：它只是为 HTTP 标头制作的。根据 RFC 7230，HTTP 标头名称不区分大小写。</p><p>因此，我们可以使用我们想要的任何大小写来访问标题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.headers[&#39;Content-Type&#39;]
&#39;application/json&#39;

&gt;&gt;&gt; r.headers.get(&#39;content-type&#39;)
&#39;application/json&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 RFC 7230，服务器可以多次发送具有不同值的相同标头，但请求将它们组合在一起，因此它们可以在单个映射中的字典中表示，这也是特殊的：</p><blockquote><p>接收者可以将具有相同字段名称的多个头字段组合成一个“字段名称：字段值”对，而不改变消息的语义，方法是将每个后续字段值按顺序附加到组合的字段值上，用 a 分隔逗号。</p></blockquote><h2 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h2><p>如果响应包含一些 Cookie，您可以快速访问它们：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;http://example.com/some/cookie/setting/url&#39;
&gt;&gt;&gt; r = requests.get(url)

&gt;&gt;&gt; r.cookies[&#39;example_cookie_name&#39;]
&#39;example_cookie_value&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要将自己的 cookie 发送到服务器，可以使用 cookies 参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;https://httpbin.org/cookies&#39;
&gt;&gt;&gt; cookies = dict(cookies_are=&#39;working&#39;)

&gt;&gt;&gt; r = requests.get(url, cookies=cookies)
&gt;&gt;&gt; r.text
&#39;{&quot;cookies&quot;: {&quot;cookies_are&quot;: &quot;working&quot;}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cookies 在 RequestsCookieJar 中返回，它的作用类似于 dict，但也提供了更完整的接口，适合在多个域或路径上使用。 Cookie jars 也可以传递给请求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; jar = requests.cookies.RequestsCookieJar()
&gt;&gt;&gt; jar.set(&#39;tasty_cookie&#39;, &#39;yum&#39;, domain=&#39;httpbin.org&#39;, path=&#39;/cookies&#39;)
&gt;&gt;&gt; jar.set(&#39;gross_cookie&#39;, &#39;blech&#39;, domain=&#39;httpbin.org&#39;, path=&#39;/elsewhere&#39;)
&gt;&gt;&gt; url = &#39;https://httpbin.org/cookies&#39;
&gt;&gt;&gt; r = requests.get(url, cookies=jar)
&gt;&gt;&gt; r.text
&#39;{&quot;cookies&quot;: {&quot;tasty_cookie&quot;: &quot;yum&quot;}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重定向和历史" tabindex="-1"><a class="header-anchor" href="#重定向和历史" aria-hidden="true">#</a> 重定向和历史</h2><p>默认情况下，请求将对除 HEAD 之外的所有动词执行位置重定向。</p><p>我们可以使用 Response 对象的 history 属性来跟踪重定向。</p><p>Response.history 列表包含为完成请求而创建的 Response 对象。该列表按从最早到最近的响应排序。</p><p>例如，GitHub 将所有 HTTP 请求重定向到 HTTPS：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(&#39;http://github.com/&#39;)

&gt;&gt;&gt; r.url
&#39;https://github.com/&#39;

&gt;&gt;&gt; r.status_code
200

&gt;&gt;&gt; r.history
[&lt;Response [301]&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您使用 GET、OPTIONS、POST、PUT、PATCH 或 DELETE，您可以使用 allow_redirects 参数禁用重定向处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(&#39;http://github.com/&#39;, allow_redirects=False)

&gt;&gt;&gt; r.status_code
301

&gt;&gt;&gt; r.history
[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你使用 HEAD，你也可以启用重定向：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.head(&#39;http://github.com/&#39;, allow_redirects=True)

&gt;&gt;&gt; r.url
&#39;https://github.com/&#39;

&gt;&gt;&gt; r.history
[&lt;Response [301]&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="超时" tabindex="-1"><a class="header-anchor" href="#超时" aria-hidden="true">#</a> 超时</h2><p>您可以使用 timeout 参数告诉请求在给定的秒数后停止等待响应。几乎所有生产代码都应在几乎所有请求中使用此参数。不这样做可能会导致您的程序无限期挂起：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://github.com/&#39;, timeout=0.001)
Traceback (most recent call last):
  File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;
requests.exceptions.Timeout: HTTPConnectionPool(host=&#39;github.com&#39;, port=80): Request timed out. (timeout=0.001)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>笔记</p><p>timeout 不是整个响应下载的时间限制；相反，如果服务器在 timeout 秒内没有发出响应（更准确地说，如果在 timeout 秒内底层套接字上没有收到任何字节），则会引发异常。如果没有明确指定超时，则请求不会超时。</p><h2 id="错误和异常" tabindex="-1"><a class="header-anchor" href="#错误和异常" aria-hidden="true">#</a> 错误和异常</h2><p>如果出现网络问题（例如 DNS 故障、拒绝连接等），Requests 将引发 ConnectionError 异常。</p><p>如果 HTTP 请求返回不成功的状态代码，Response.raise_for_status() 将引发 HTTPError。</p><p>如果请求超时，则会引发超时异常。</p><p>如果请求超过配置的最大重定向数，则会引发 TooManyRedirects 异常。</p><p>Requests 显式引发的所有异常都继承自 requests.exceptions.RequestException。</p><h1 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h1><h2 id="会话对象-session" tabindex="-1"><a class="header-anchor" href="#会话对象-session" aria-hidden="true">#</a> 会话对象(Session)</h2><p>Session 对象允许您跨请求保留某些参数。它还在会话实例发出的所有请求中保留 cookie，并将使用 urllib3 的连接池。因此，如果您向同一主机发出多个请求，则底层 TCP 连接将被重用，这可能会显着提高性能（请参阅 HTTP 持久连接）。</p><p>Session 对象具有主请求 API 的所有方法。</p><p>让我们在请求中保留一些 cookie：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s = requests.Session()

s.get(&#39;https://httpbin.org/cookies/set/sessioncookie/123456789&#39;)
r = s.get(&#39;https://httpbin.org/cookies&#39;)

print(r.text)
# &#39;{&quot;cookies&quot;: {&quot;sessioncookie&quot;: &quot;123456789&quot;}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会话也可用于向请求方法提供默认数据。这是通过向 Session 对象的属性提供数据来完成的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s = requests.Session()
s.auth = (&#39;user&#39;, &#39;pass&#39;)
s.headers.update({&#39;x-test&#39;: &#39;true&#39;})

# both &#39;x-test&#39; and &#39;x-test2&#39; are sent
s.get(&#39;https://httpbin.org/headers&#39;, headers={&#39;x-test2&#39;: &#39;true&#39;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您传递给请求方法的任何字典都将与设置的会话级值合并。方法级参数覆盖会话参数。</p><p>但是请注意，即使使用会话，方法级参数也不会在请求之间保持不变。此示例将仅发送带有第一个请求的 cookie，而不会发送第二个请求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s = requests.Session()

r = s.get(&#39;https://httpbin.org/cookies&#39;, cookies={&#39;from-my&#39;: &#39;browser&#39;})
print(r.text)
# &#39;{&quot;cookies&quot;: {&quot;from-my&quot;: &quot;browser&quot;}}&#39;

r = s.get(&#39;https://httpbin.org/cookies&#39;)
print(r.text)
# &#39;{&quot;cookies&quot;: {}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想手动将 cookie 添加到会话中，请使用 Cookie 实用程序函数来操作 Session.cookies。</p><p>会话也可以用作上下文管理器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with requests.Session() as s:
    s.get(&#39;https://httpbin.org/cookies/set/sessioncookie/123456789&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这将确保会话在退出 with 块后立即关闭，即使发生未处理的异常也是如此。</p><p>从字典参数中删除一个值</p><p>有时您会希望从 dict 参数中省略会话级别的键。为此，您只需在方法级参数中将该键的值设置为 None。它会自动被省略。</p><p>您可以直接使用会话中包含的所有值。请参阅会话 API 文档以了解更多信息。</p><h2 id="请求和响应对象" tabindex="-1"><a class="header-anchor" href="#请求和响应对象" aria-hidden="true">#</a> 请求和响应对象</h2><p>每当调用 requests.get() 和朋友时，您都在做两件主要的事情。首先，您正在构建一个 Request 对象，该对象将被发送到服务器以请求或查询某些资源。其次，一旦 Requests 从服务器获得响应，就会生成一个 Response 对象。 Response 对象包含服务器返回的所有信息，还包含您最初创建的 Request 对象。这是一个从 Wikipedia 的服务器获取一些非常重要的信息的简单请求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(&#39;https://en.wikipedia.org/wiki/Monty_Python&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们想访问服务器发回给我们的标头，我们这样做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.headers
{&#39;content-length&#39;: &#39;56170&#39;, &#39;x-content-type-options&#39;: &#39;nosniff&#39;, &#39;x-cache&#39;:
&#39;HIT from cp1006.eqiad.wmnet, MISS from cp1010.eqiad.wmnet&#39;, &#39;content-encoding&#39;:
&#39;gzip&#39;, &#39;age&#39;: &#39;3080&#39;, &#39;content-language&#39;: &#39;en&#39;, &#39;vary&#39;: &#39;Accept-Encoding,Cookie&#39;,
&#39;server&#39;: &#39;Apache&#39;, &#39;last-modified&#39;: &#39;Wed, 13 Jun 2012 01:33:50 GMT&#39;,
&#39;connection&#39;: &#39;close&#39;, &#39;cache-control&#39;: &#39;private, s-maxage=0, max-age=0,
must-revalidate&#39;, &#39;date&#39;: &#39;Thu, 14 Jun 2012 12:59:39 GMT&#39;, &#39;content-type&#39;:
&#39;text/html; charset=UTF-8&#39;, &#39;x-cache-lookup&#39;: &#39;HIT from cp1006.eqiad.wmnet:3128,
MISS from cp1010.eqiad.wmnet:80&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果我们想获取我们发送给服务器的标头，我们只需访问请求，然后访问请求的标头：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.request.headers
{&#39;Accept-Encoding&#39;: &#39;identity, deflate, compress, gzip&#39;,
&#39;Accept&#39;: &#39;*/*&#39;, &#39;User-Agent&#39;: &#39;python-requests/1.2.0&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="准备好的请求-api示例" tabindex="-1"><a class="header-anchor" href="#准备好的请求-api示例" aria-hidden="true">#</a> 准备好的请求(API示例)</h2><p>每当您从 API 调用或 Session 调用接收到 Response 对象时，请求属性实际上就是使用的 PreparedRequest。在某些情况下，您可能希望在发送请求之前对正文或标头（或其他任何东西）做一些额外的工作。简单的配方如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from requests import Request, Session

s = Session()

req = Request(&#39;POST&#39;, url, data=data, headers=headers)
prepped = req.prepare()

# do something with prepped.body
prepped.body = &#39;No, I want exactly this as the body.&#39;

# do something with prepped.headers
del prepped.headers[&#39;Content-Type&#39;]

resp = s.send(prepped,
    stream=stream,
    verify=verify,
    proxies=proxies,
    cert=cert,
    timeout=timeout
)

print(resp.status_code)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于您没有对 Request 对象做任何特别的事情，因此您立即准备它并修改 PreparedRequest 对象。然后，您将其与您将发送到 requests.* 或 Session.* 的其他参数一起发送。</p><p>但是，上面的代码将失去拥有 Requests Session 对象的一些优点。特别是，会话级状态（例如 cookie）不会应用于您的请求。要获得应用了该状态的 PreparedRequest，请将对 Request.prepare() 的调用替换为对 Session.prepare_request() 的调用，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from requests import Request, Session

s = Session()
req = Request(&#39;GET&#39;,  url, data=data, headers=headers)

prepped = s.prepare_request(req)

# do something with prepped.body
prepped.body = &#39;Seriously, send exactly these bytes.&#39;

# do something with prepped.headers
prepped.headers[&#39;Keep-Dead&#39;] = &#39;parrot&#39;

resp = s.send(prepped,
    stream=stream,
    verify=verify,
    proxies=proxies,
    cert=cert,
    timeout=timeout
)

print(resp.status_code)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当您使用准备好的请求流时，请记住它没有考虑环境。如果您使用环境变量来更改请求的行为，这可能会导致问题。例如： REQUESTS_CA_BUNDLE 中指定的自签名 SSL 证书将不予考虑。结果是 SSL: CERTIFICATE_VERIFY_FAILED 被抛出。您可以通过将环境设置显式合并到会话中来解决此问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from requests import Request, Session

s = Session()
req = Request(&#39;GET&#39;, url)

prepped = s.prepare_request(req)

# Merge environment settings into session
settings = s.merge_environment_settings(prepped.url, {}, None, None, None)
resp = s.send(prepped, **settings)

print(resp.status_code)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssl-证书验证" tabindex="-1"><a class="header-anchor" href="#ssl-证书验证" aria-hidden="true">#</a> SSL 证书验证</h2><p>Requests 为 HTTPS 请求验证 SSL 证书，就像 Web 浏览器一样。默认情况下启用 SSL 验证，如果无法验证证书，Requests 将抛出 SSLError：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://requestb.in&#39;)
requests.exceptions.SSLError: hostname &#39;requestb.in&#39; doesn&#39;t match either of &#39;*.herokuapp.com&#39;, &#39;herokuapp.com&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我没有在这个域上设置 SSL，所以它会引发异常。出色的。 GitHub 确实：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://github.com&#39;)
&lt;Response [200]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以通过受信任的 CA 证书验证 CA_BUNDLE 文件或目录的路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://github.com&#39;, verify=&#39;/path/to/certfile&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或持久的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s = requests.Session()
s.verify = &#39;/path/to/certfile&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>笔记</p><p>如果 verify 设置为目录的路径，则必须使用 OpenSSL 提供的 c_rehash 实用程序处理该目录。</p><p>这个受信任的 CA 列表也可以通过 REQUESTS_CA_BUNDLE 环境变量指定。如果未设置 REQUESTS_CA_BUNDLE，则 CURL_CA_BUNDLE 将用作后备。</p><p>如果将 verify 设置为 False，请求也可以忽略验证 SSL 证书：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://kennethreitz.org&#39;, verify=False)
&lt;Response [200]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，当 verify 设置为 False 时，请求将接受服务器提供的任何 TLS 证书，并将忽略主机名不匹配和/或过期证书，这将使您的应用程序容易受到中间人 (MitM) 攻击。在本地开发或测试期间，将 verify 设置为 False 可能很有用。</p><p>默认情况下，验证设置为 True。选项 verify 仅适用于主机证书。</p><h2 id="客户端证书" tabindex="-1"><a class="header-anchor" href="#客户端证书" aria-hidden="true">#</a> 客户端证书</h2><p>您还可以指定本地证书用作客户端证书，作为单个文件（包含私钥和证书）或作为两个文件路径的元组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://kennethreitz.org&#39;, cert=(&#39;/path/client.cert&#39;, &#39;/path/client.key&#39;))
&lt;Response [200]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或持久的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s = requests.Session()
s.cert = &#39;/path/client.cert&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您指定了错误的路径或无效的证书，您将收到 SSLError：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://kennethreitz.org&#39;, cert=&#39;/wrong_path/client.pem&#39;)
SSLError: [Errno 336265225] _ssl.c:347: error:140B0009:SSL routines:SSL_CTX_use_PrivateKey_file:PEM lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>警告</p><p>本地证书的私钥必须未加密。目前，Requests 不支持使用加密密钥。</p><h2 id="ca-证书" tabindex="-1"><a class="header-anchor" href="#ca-证书" aria-hidden="true">#</a> CA 证书</h2><p>Requests 使用包 certifi 中的证书。这允许用户在不更改请求版本的情况下更新其受信任的证书。</p><p>在 2.16 版之前，Requests 捆绑了一组它信任的根 CA，这些 CA 来自 Mozilla 信任库。每个请求版本的证书仅更新一次。如果未安装 certifi，则在使用明显较旧版本的 Requests 时，这会导致证书包非常过时。</p><p>为了安全起见，我们建议经常升级证书！</p><h2 id="正文内容工作流程" tabindex="-1"><a class="header-anchor" href="#正文内容工作流程" aria-hidden="true">#</a> 正文内容工作流程</h2><p>默认情况下，当您发出请求时，会立即下载响应的正文。您可以覆盖此行为并推迟下载响应正文，直到您使用流参数访问 Response.content 属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tarball_url = &#39;https://github.com/psf/requests/tarball/main&#39;
r = requests.get(tarball_url, stream=True)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时只下载了响应标头并且连接保持打开状态，因此允许我们使内容检索有条件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if int(r.headers[&#39;content-length&#39;]) &lt; TOO_LONG:
  content = r.content
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用 Response.iter_content() 和 Response.iter_lines() 方法进一步控制工作流程。或者，您可以从 Response.raw 的底层 urllib3 urllib3.HTTPResponse 读取未解码的正文。</p><p>如果您在发出请求时将流设置为 True，则除非您消耗所有数据或调用 Response.close，否则 Requests 无法将连接释放回池中。这可能导致连接效率低下。如果您发现自己在使用 stream=True 时部分读取了请求正文（或根本不读取它们），您应该在 with 语句中发出请求以确保它始终关闭：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with requests.get(&#39;https://httpbin.org/get&#39;, stream=True) as r:
    # Do things with the response here.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="活着-belive" tabindex="-1"><a class="header-anchor" href="#活着-belive" aria-hidden="true">#</a> 活着(Belive)</h2><p>好消息——感谢 urllib3，在会话中保持活动是 100% 自动的！您在会话中发出的任何请求都将自动重用相应的连接！</p><p>请注意，只有在读取所有主体数据后，连接才会释放回池中以供重用；请务必将 stream 设置为 False 或读取 Response 对象的 content 属性。</p><h2 id="流式上传-upload" tabindex="-1"><a class="header-anchor" href="#流式上传-upload" aria-hidden="true">#</a> 流式上传(Upload)</h2><p>Requests 支持流式上传，允许您发送大型流或文件而无需将它们读入内存。要流式传输和上传，只需为您的 body 提供一个类似文件的对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with open(&#39;massive-body&#39;, &#39;rb&#39;) as f:
    requests.post(&#39;http://some.url/streamed&#39;, data=f)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>警告</p><p>强烈建议您以二进制模式打开文件。这是因为 Requests 可能会尝试为您提供 Content-Length 标头，如果这样做，此值将设置为文件中的字节数。如果以文本模式打开文件，可能会出现错误。</p><h2 id="块编码请求" tabindex="-1"><a class="header-anchor" href="#块编码请求" aria-hidden="true">#</a> 块编码请求</h2><p>Requests 还支持传出和传入请求的分块传输编码。要发送块编码的请求，只需为您的主体提供一个生成器（或任何没有长度的迭代器）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def gen():
    yield &#39;hi&#39;
    yield &#39;there&#39;

requests.post(&#39;http://some.url/chunked&#39;, data=gen())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于分块编码的响应，最好使用 Response.iter_content() 遍历数据。在理想情况下，您将在请求中设置 stream=True，在这种情况下，您可以通过调用 iter_content 并使用 chunk_size 参数 None 来逐块迭代。如果要设置块的最大大小，可以将 chunk_size 参数设置为任意整数。</p><h2 id="post-多个多部分编码文件" tabindex="-1"><a class="header-anchor" href="#post-多个多部分编码文件" aria-hidden="true">#</a> POST 多个多部分编码文件</h2><p>您可以在一个请求中发送多个文件。例如，假设您要将图像文件上传到具有多个文件字段“图像”的 HTML 表单：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;file&quot; name=&quot;images&quot; multiple=&quot;true&quot; required=&quot;true&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为此，只需将文件设置为 (form_field_name, file_info) 的元组列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;https://httpbin.org/post&#39;
&gt;&gt;&gt; multiple_files = [
...     (&#39;images&#39;, (&#39;foo.png&#39;, open(&#39;foo.png&#39;, &#39;rb&#39;), &#39;image/png&#39;)),
...     (&#39;images&#39;, (&#39;bar.png&#39;, open(&#39;bar.png&#39;, &#39;rb&#39;), &#39;image/png&#39;))]
&gt;&gt;&gt; r = requests.post(url, files=multiple_files)
&gt;&gt;&gt; r.text
{
  ...
  &#39;files&#39;: {&#39;images&#39;: &#39;data:image/png;base64,iVBORw ....&#39;}
  &#39;Content-Type&#39;: &#39;multipart/form-data; boundary=3131623adb2043caaeb5538cc7aa0b3a&#39;,
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>警告</p><p>强烈建议您以二进制模式打开文件。这是因为 Requests 可能会尝试为您提供 Content-Length 标头，如果这样做，此值将设置为文件中的字节数。如果以文本模式打开文件，可能会出现错误。</p><h2 id="事件挂钩" tabindex="-1"><a class="header-anchor" href="#事件挂钩" aria-hidden="true">#</a> 事件挂钩</h2><p>Requests 有一个钩子系统，您可以使用它来操纵请求过程的一部分或信号事件处理。</p><p>可用的钩子：</p><ul><li><p>回复：</p><p>从请求生成的响应。</p></li></ul><p>您可以通过将 {hook_name: callback_function} 字典传递给 hooks 请求参数来为每个请求分配一个钩子函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hooks={&#39;response&#39;: print_url}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该回调函数将接收一大块数据作为其第一个参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def print_url(r, *args, **kwargs):
    print(r.url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您的回调函数必须处理自己的异常。任何未处理的异常都不会静默传递，因此应由调用 Requests 的代码处理。</p><p>如果回调函数返回一个值，则假定它是替换传入的数据。如果该函数没有返回任何内容，则不会影响其他任何内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def record_hook(r, *args, **kwargs):
    r.hook_called = True
    return r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们在运行时打印一些请求方法参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;https://httpbin.org/&#39;, hooks={&#39;response&#39;: print_url})
https://httpbin.org/
&lt;Response [200]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以向单个请求添加多个挂钩。让我们一次调用两个钩子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(&#39;https://httpbin.org/&#39;, hooks={&#39;response&#39;: [print_url, record_hook]})
&gt;&gt;&gt; r.hook_called
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以将挂钩添加到 Session 实例。然后，您添加的任何钩子都将在对会话发出的每个请求上被调用。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; s = requests.Session()
&gt;&gt;&gt; s.hooks[&#39;response&#39;].append(print_url)
&gt;&gt;&gt; s.get(&#39;https://httpbin.org/&#39;)
 https://httpbin.org/
 &lt;Response [200]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 Session 可以有多个钩子，它们会按照添加的顺序被调用。</p><h2 id="自定义身份验证" tabindex="-1"><a class="header-anchor" href="#自定义身份验证" aria-hidden="true">#</a> 自定义身份验证</h2><p>Requests 允许您指定自己的身份验证机制。</p><p>任何作为 auth 参数传递给请求方法的可调用对象都将有机会在请求被分派之前对其进行修改。</p><p>身份验证实现是 AuthBase 的子类，并且易于定义。 Requests 在 requests.auth 中提供了两种常见的身份验证方案实现：HTTPBasicAuth 和 HTTPDigestAuth。</p><p>假设我们有一个 Web 服务，只有在 X-Pizza 标头设置为密码值时才会响应。不太可能，但随它去吧。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from requests.auth import AuthBase

class PizzaAuth(AuthBase):
    &quot;&quot;&quot;Attaches HTTP Pizza Authentication to the given Request object.&quot;&quot;&quot;
    def __init__(self, username):
        # setup any auth-related data here
        self.username = username

    def __call__(self, r):
        # modify and return the request
        r.headers[&#39;X-Pizza&#39;] = self.username
        return r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们可以使用我们的 Pizza Auth 发出请求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; requests.get(&#39;http://pizzabin.org/admin&#39;, auth=PizzaAuth(&#39;kenneth&#39;))
&lt;Response [200]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流式传输请求" tabindex="-1"><a class="header-anchor" href="#流式传输请求" aria-hidden="true">#</a> 流式传输请求</h2><p>使用 Response.iter_lines() 您可以轻松地迭代流式 API，例如 Twitter 流式 API。只需将 stream 设置为 True 并使用 iter_lines 迭代响应：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import json
import requests

r = requests.get(&#39;https://httpbin.org/stream/20&#39;, stream=True)

for line in r.iter_lines():

    # filter out keep-alive new lines
    if line:
        decoded_line = line.decode(&#39;utf-8&#39;)
        print(json.loads(decoded_line))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 decode_unicode=True 与 Response.iter_lines() 或 Response.iter_content() 一起使用时，您需要提供一种备用编码，以防服务器不提供：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>r = requests.get(&#39;https://httpbin.org/stream/20&#39;, stream=True)

if r.encoding is None:
    r.encoding = &#39;utf-8&#39;

for line in r.iter_lines(decode_unicode=True):
    if line:
        print(json.loads(line))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>警告</p><p>iter_lines 不是可重入安全的。多次调用此方法会导致部分接收到的数据丢失。如果您需要从多个位置调用它，请改用生成的迭代器对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lines = r.iter_lines()
# Save the first line for later or just skip it

first_line = next(lines)

for line in lines:
    print(line)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理-proxy" tabindex="-1"><a class="header-anchor" href="#代理-proxy" aria-hidden="true">#</a> 代理(Proxy)</h2><p>如果您需要使用代理，您可以使用代理参数为任何请求方法配置单个请求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests

proxies = {
  &#39;http&#39;: &#39;http://10.10.1.10:3128&#39;,
  &#39;https&#39;: &#39;http://10.10.1.10:1080&#39;,
}

requests.get(&#39;http://example.org&#39;, proxies=proxies)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，您可以为整个会话配置一次：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests

proxies = {
  &#39;http&#39;: &#39;http://10.10.1.10:3128&#39;,
  &#39;https&#39;: &#39;http://10.10.1.10:1080&#39;,
}
session = requests.Session()
session.proxies.update(proxies)

session.get(&#39;http://example.org&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>警告</p><p>设置 session.proxies 的行为可能与预期不同。提供的值将被环境代理（由 urllib.request.getproxies 返回的那些）覆盖。为了确保在存在环境代理的情况下使用代理，请在所有单独的请求中明确指定代理参数，如上文最初所述。</p><p>有关详细信息，请参阅#2018。</p><p>如上所示，当每个请求未覆盖代理配置时，请求依赖于由标准环境变量 http_proxy、https_proxy、no_proxy 和 all_proxy 定义的代理配置。还支持这些变量的大写变体。因此，您可以将它们设置为配置请求（仅设置与您的需求相关的请求）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ export HTTP_PROXY=&quot;http://10.10.1.10:3128&quot;
$ export HTTPS_PROXY=&quot;http://10.10.1.10:1080&quot;
$ export ALL_PROXY=&quot;socks5://10.10.1.10:3434&quot;

$ python
&gt;&gt;&gt; import requests
&gt;&gt;&gt; requests.get(&#39;http://example.org&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,244),c={href:"http://user:password@host/",target:"_blank",rel:"noopener noreferrer"},o=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ export HTTPS_PROXY=&quot;http://user:pass@10.10.1.10:1080&quot;

$ python
&gt;&gt;&gt; proxies = {&#39;http&#39;: &#39;http://user:pass@10.10.1.10:3128/&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>警告</p><p>将敏感的用户名和密码信息存储在环境变量或版本控制文件中存在安全风险，强烈建议不要这样做。</p><p>要为特定方案和主机提供代理，请使用 scheme://hostname 形式作为密钥。这将匹配对给定方案和确切主机名的任何请求。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxies = {&#39;http://10.20.1.128&#39;: &#39;http://10.10.1.10:5323&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，代理 URL 必须包含方案。</p><p>最后，请注意，使用代理进行 https 连接通常需要您的本地计算机信任代理的根证书。默认情况下，可以通过以下方式找到请求信任的证书列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from requests.utils import DEFAULT_CA_BUNDLE_PATH
print(DEFAULT_CA_BUNDLE_PATH)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以通过将 REQUESTS_CA_BUNDLE（或 CURL_CA_BUNDLE）环境变量设置为另一个文件路径来覆盖此默认证书包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ export REQUESTS_CA_BUNDLE=&quot;/usr/local/myproxy_info/cacert.pem&quot;
$ export https_proxy=&quot;http://10.10.1.10:1080&quot;

$ python
&gt;&gt;&gt; import requests
&gt;&gt;&gt; requests.get(&#39;https://example.org&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="socks5" tabindex="-1"><a class="header-anchor" href="#socks5" aria-hidden="true">#</a> Socks5</h3><p><em>版本 2.10.0 中的新功能。</em></p><p>除了基本的 HTTP 代理之外，Requests 还支持使用 SOCKS 协议的代理。这是一项可选功能，需要在使用前安装其他第三方库。</p><p>您可以从 pip 获取此功能的依赖项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install requests[socks]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦你安装了这些依赖项，使用 SOCKS 代理就像使用 HTTP 一样简单：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxies = {
    &#39;http&#39;: &#39;socks5://user:pass@host:port&#39;,
    &#39;https&#39;: &#39;socks5://user:pass@host:port&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方案 socks5 会导致 DNS 解析发生在客户端上，而不是代理服务器上。这与 curl 一致，它使用该方案来决定是在客户端还是代理上进行 DNS 解析。如果要解析代理服务器上的域，请使用 socks5h 作为方案。</p><h2 id="遵守规范" tabindex="-1"><a class="header-anchor" href="#遵守规范" aria-hidden="true">#</a> 遵守规范</h2><p>Requests 旨在符合所有相关规范和 RFC，这些规范和 RFC 不会给用户带来困难。这种对规范的关注可能会导致一些对不熟悉相关规范的人来说可能看起来不寻常的行为。</p><h3 id="编码-1" tabindex="-1"><a class="header-anchor" href="#编码-1" aria-hidden="true">#</a> 编码</h3><p>当您收到响应时，Requests 会在您访问 Response.text 属性时猜测用于解码响应的编码。请求将首先检查 HTTP 标头中的编码，如果不存在，将使用 charset_normalizer 或 chardet 尝试猜测编码。</p><p>如果安装了 chardet，则 requests 使用它，但是对于 python3 chardet 不再是强制依赖项。 chardet 库是一个 LGPL 许可的依赖项，一些请求用户不能依赖于强制性 LGPL 许可的依赖项。</p><p>当您安装请求时未指定额外的 [use_chardet_on_py3]，并且尚未安装 chardet，请求使用 charset-normalizer（MIT 许可）来猜测编码。</p><p>Requests 唯一不会猜测编码的情况是 HTTP 标头中不存在显式字符集并且 Content-Type 标头包含文本。在这种情况下，RFC 2616 指定默认字符集必须是 ISO-8859-1。在这种情况下，请求遵循规范。如果您需要不同的编码，您可以手动设置 Response.encoding 属性，或使用原始的 Response.content。</p><h2 id="http-动词" tabindex="-1"><a class="header-anchor" href="#http-动词" aria-hidden="true">#</a> HTTP 动词</h2><p>Requests 提供对几乎所有 HTTP 动词的访问：GET、OPTIONS、HEAD、POST、PUT、PATCH 和 DELETE。下面提供了使用 GitHub API 在请求中使用这些不同动词的详细示例。</p><p>我们将从最常用的动词开始：GET。 HTTP GET 是一种从给定 URL 返回资源的幂等方法。因此，它是您在尝试从 Web 位置检索数据时应该使用的动词。一个示例用法是尝试从 GitHub 获取有关特定提交的信息。假设我们想要在 Requests 上提交 a050faf。我们会这样得到它：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; import requests
&gt;&gt;&gt; r = requests.get(&#39;https://api.github.com/repos/psf/requests/git/commits/a050faf084662f3a352dd1a941f2c7c9f886d4ad&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们应该确认 GitHub 响应正确。如果有，我们想弄清楚它是什么类型的内容。这样做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; if r.status_code == requests.codes.ok:
...     print(r.headers[&#39;content-type&#39;])
...
application/json; charset=utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，GitHub 返回 JSON。太好了，我们可以使用 r.json 方法将其解析为 Python 对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; commit_data = r.json()

&gt;&gt;&gt; print(commit_data.keys())
[&#39;committer&#39;, &#39;author&#39;, &#39;url&#39;, &#39;tree&#39;, &#39;sha&#39;, &#39;parents&#39;, &#39;message&#39;]

&gt;&gt;&gt; print(commit_data[&#39;committer&#39;])
{&#39;date&#39;: &#39;2012-05-10T11:10:50-07:00&#39;, &#39;email&#39;: &#39;me@kennethreitz.com&#39;, &#39;name&#39;: &#39;Kenneth Reitz&#39;}

&gt;&gt;&gt; print(commit_data[&#39;message&#39;])
makin&#39; history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到目前为止，如此简单。好吧，让我们稍微研究一下 GitHub API。现在，我们可以查看文档，但如果我们使用 Requests 代替，我们可能会更有趣。我们可以利用 Requests OPTIONS 动词来查看我们刚刚使用的 url 支持哪些类型的 HTTP 方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; verbs = requests.options(r.url)
&gt;&gt;&gt; verbs.status_code
500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>呃，什么？那是无益的！事实证明 GitHub 和许多 API 提供者一样，实际上并没有实现 OPTIONS 方法。这是一个令人讨厌的疏忽，但没关系，我们可以使用无聊的文档。但是，如果 GitHub 正确实现了 OPTIONS，它们应该在标头中返回允许的方法，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; verbs = requests.options(&#39;http://a-good-website.com/api/cats&#39;)
&gt;&gt;&gt; print(verbs.headers[&#39;allow&#39;])
GET,HEAD,POST,OPTIONS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转向文档，我们看到唯一允许提交的其他方法是 POST，它创建一个新的提交。当我们使用 Requests 存储库时，我们可能应该避免对其进行粗暴的 POSTS。相反，让我们使用 GitHub 的问题功能。</p><p>添加此文档以响应问题 #482。鉴于此问题已经存在，我们将使用它作为示例。让我们从得到它开始。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(&#39;https://api.github.com/repos/psf/requests/issues/482&#39;)
&gt;&gt;&gt; r.status_code
200

&gt;&gt;&gt; issue = json.loads(r.text)

&gt;&gt;&gt; print(issue[&#39;title&#39;])
Feature any http verb in docs

&gt;&gt;&gt; print(issue[&#39;comments&#39;])
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很酷，我们有三个评论。让我们来看看他们中的最后一个。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.get(r.url + &#39;/comments&#39;)
&gt;&gt;&gt; r.status_code
200

&gt;&gt;&gt; comments = r.json()

&gt;&gt;&gt; print(comments[0].keys())
[&#39;body&#39;, &#39;url&#39;, &#39;created_at&#39;, &#39;updated_at&#39;, &#39;user&#39;, &#39;id&#39;]

&gt;&gt;&gt; print(comments[2][&#39;body&#39;])
Probably in the &quot;advanced&quot; section
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嗯，这似乎是一个愚蠢的地方。让我们发表一条评论，告诉海报他很傻。到底是谁的海报？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; print(comments[2][&#39;user&#39;][&#39;login&#39;])
kennethreitz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>好的，所以让我们告诉这个 Kenneth 家伙，我们认为这个示例应该放在快速入门指南中。根据 GitHub API 文档，执行此操作的方法是 POST 到线程。我们开始做吧。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; body = json.dumps({u&quot;body&quot;: u&quot;Sounds great! I&#39;ll get right on it!&quot;})
&gt;&gt;&gt; url = u&quot;https://api.github.com/repos/psf/requests/issues/482/comments&quot;

&gt;&gt;&gt; r = requests.post(url=url, data=body)
&gt;&gt;&gt; r.status_code
404
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>呵呵，这很奇怪。我们可能需要进行身份验证。那会很痛苦，对吧？错误的。 Requests 使使用多种形式的身份验证变得容易，包括非常常见的基本身份验证。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; from requests.auth import HTTPBasicAuth
&gt;&gt;&gt; auth = HTTPBasicAuth(&#39;fake@example.com&#39;, &#39;not_a_real_password&#39;)

&gt;&gt;&gt; r = requests.post(url=url, data=body, auth=auth)
&gt;&gt;&gt; r.status_code
201

&gt;&gt;&gt; content = r.json()
&gt;&gt;&gt; print(content[&#39;body&#39;])
Sounds great! I&#39;ll get right on it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>杰出的。哦，等等，不！我想补充一点，这需要我一段时间，因为我必须去喂我的猫。要是我能编辑这条评论就好了！令人高兴的是，GitHub 允许我们使用另一个 HTTP 动词 PATCH 来编辑此评论。让我们这样做。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; print(content[u&quot;id&quot;])
5804413

&gt;&gt;&gt; body = json.dumps({u&quot;body&quot;: u&quot;Sounds great! I&#39;ll get right on it once I feed my cat.&quot;})
&gt;&gt;&gt; url = u&quot;https://api.github.com/repos/psf/requests/issues/comments/5804413&quot;

&gt;&gt;&gt; r = requests.patch(url=url, data=body, auth=auth)
&gt;&gt;&gt; r.status_code
200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出色的。现在，为了折磨这个肯尼斯家伙，我决定让他出汗，而不是告诉他我正在努力。这意味着我想删除这条评论。 GitHub 允许我们使用非常贴切的 DELETE 方法删除评论。让我们摆脱它。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.delete(url=url, auth=auth)
&gt;&gt;&gt; r.status_code
204
&gt;&gt;&gt; r.headers[&#39;status&#39;]
&#39;204 No Content&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出色的。全没了。我想知道的最后一件事是我使用了多少速率限制。让我们来了解一下。 GitHub 在标头中发送该信息，因此我将发送 HEAD 请求以获取标头，而不是下载整个页面。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.head(url=url, auth=auth)
&gt;&gt;&gt; print(r.headers)
...
&#39;x-ratelimit-remaining&#39;: &#39;4995&#39;
&#39;x-ratelimit-limit&#39;: &#39;5000&#39;
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出色的。是时候编写一个以各种令人兴奋的方式滥用 GitHub API 的 Python 程序了，4995 次以上。</p><h2 id="自定义动词" tabindex="-1"><a class="header-anchor" href="#自定义动词" aria-hidden="true">#</a> 自定义动词</h2><p>有时，您可能会使用服务器，无论出于何种原因，该服务器允许使用甚至需要使用上面未涵盖的 HTTP 动词。一个例子是一些 WEBDAV 服务器使用的 MKCOL 方法。不要担心，这些仍然可以与请求一起使用。这些使用内置的 .request 方法。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r = requests.request(&#39;MKCOL&#39;, url, data=data)
&gt;&gt;&gt; r.status_code
200 # Assuming your call was correct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这一点，您可以使用服务器允许的任何方法动词。</p><h2 id="链接头" tabindex="-1"><a class="header-anchor" href="#链接头" aria-hidden="true">#</a> 链接头</h2><p>许多 HTTP API 都具有链接头。它们使 API 更具自我描述性和可发现性。</p><p>GitHub 在其 API 中使用这些进行分页，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; url = &#39;https://api.github.com/users/kennethreitz/repos?page=1&amp;per_page=10&#39;
&gt;&gt;&gt; r = requests.head(url=url)
&gt;&gt;&gt; r.headers[&#39;link&#39;]
&#39;&lt;https://api.github.com/users/kennethreitz/repos?page=2&amp;per_page=10&gt;; rel=&quot;next&quot;, &lt;https://api.github.com/users/kennethreitz/repos?page=6&amp;per_page=10&gt;; rel=&quot;last&quot;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求将自动解析这些链接头并使其易于使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; r.links[&quot;next&quot;]
{&#39;url&#39;: &#39;https://api.github.com/users/kennethreitz/repos?page=2&amp;per_page=10&#39;, &#39;rel&#39;: &#39;next&#39;}

&gt;&gt;&gt; r.links[&quot;last&quot;]
{&#39;url&#39;: &#39;https://api.github.com/users/kennethreitz/repos?page=7&amp;per_page=10&#39;, &#39;rel&#39;: &#39;last&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="传输适配器" tabindex="-1"><a class="header-anchor" href="#传输适配器" aria-hidden="true">#</a> 传输适配器</h2><p>从 v1.0.0 开始，Requests 已转向模块化内部设计。这样做的部分原因是为了实现传输适配器，最初在此处描述。传输适配器提供了一种机制来定义 HTTP 服务的交互方法。特别是，它们允许您应用每个服务的配置。</p><p>请求附带一个传输适配器，即 HTTPAdapter。此适配器使用强大的 urllib3 库提供与 HTTP 和 HTTPS 的默认请求交互。每当初始化 Requests Session 时，其中一个附加到 HTTP 的 Session 对象，一个附加到 HTTPS。</p><p>Requests 使用户能够创建和使用他们自己的提供特定功能的传输适配器。创建后，可以将传输适配器安装到 Session 对象，以及它应该应用于哪些 Web 服务的指示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; s = requests.Session()
&gt;&gt;&gt; s.mount(&#39;https://github.com/&#39;, MyAdapter())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>挂载调用将传输适配器的特定实例注册到前缀。安装后，使用 URL 以给定前缀开头的会话发出的任何 HTTP 请求都将使用给定的传输适配器。</p><p>实现传输适配器的许多细节超出了本文档的范围，但请看下一个简单 SSL 用例的示例。不仅如此，您还可以查看 BaseAdapter 的子类化。</p><h3 id="示例-特定-ssl-版本" tabindex="-1"><a class="header-anchor" href="#示例-特定-ssl-版本" aria-hidden="true">#</a> 示例：特定 SSL 版本</h3><p>Requests 团队已做出特定选择，以使用基础库 (urllib3) 中默认的任何 SSL 版本。通常这很好，但有时，您可能会发现自己需要连接到使用与默认版本不兼容的服务端点。</p><p>您可以为此使用传输适配器，方法是采用大部分现有的 HTTPAdapter 实现，并添加一个传递给 urllib3 的参数 ssl_version。我们将制作一个传输适配器，指示库使用 SSLv3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import ssl
from urllib3.poolmanager import PoolManager

from requests.adapters import HTTPAdapter


class Ssl3HttpAdapter(HTTPAdapter):
    &quot;&quot;&quot;&quot;Transport adapter&quot; that allows us to use SSLv3.&quot;&quot;&quot;

    def init_poolmanager(self, connections, maxsize, block=False):
        self.poolmanager = PoolManager(
            num_pools=connections, maxsize=maxsize,
            block=block, ssl_version=ssl.PROTOCOL_SSLv3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阻塞还是非阻塞" tabindex="-1"><a class="header-anchor" href="#阻塞还是非阻塞" aria-hidden="true">#</a> 阻塞还是非阻塞？</h2><p>使用默认传输适配器，Requests 不提供任何类型的非阻塞 IO。 Response.content 属性将被阻塞，直到整个响应被下载。如果您需要更多粒度，库的流式传输功能（请参阅流式传输请求）允许您一次检索更少量的响应。但是，这些调用仍将阻塞。</p><p>如果您担心阻塞 IO 的使用，有很多项目将请求与 Python 的异步框架之一结合起来。一些优秀的例子是 requests-threads、grequests、requests-futures 和 httpx。</p><h2 id="标题排序" tabindex="-1"><a class="header-anchor" href="#标题排序" aria-hidden="true">#</a> 标题排序</h2><p>在不寻常的情况下，您可能希望以有序的方式提供标题。如果您将 OrderedDict 传递给 headers 关键字参数，则会为标题提供排序。但是，请求使用的默认标头的顺序将是首选，这意味着如果您在 headers 关键字参数中覆盖默认标头，与该关键字参数中的其他标头相比，它们可能会出现乱序。</p><p>如果这是有问题的，用户应该考虑通过将 Session 设置为自定义 OrderedDict 来设置 Session 对象的默认标头。该排序将始终是首选。</p><h2 id="超时-1" tabindex="-1"><a class="header-anchor" href="#超时-1" aria-hidden="true">#</a> 超时</h2><p>大多数对外部服务器的请求都应该附加超时，以防服务器没有及时响应。默认情况下，除非明确设置超时值，否则请求不会超时。如果没有超时，您的代码可能会挂起几分钟或更长时间。</p><p>连接超时是请求将等待您的客户端在套接字上建立与远程机器的连接（对应于 connect()）调用的秒数。最好将连接超时设置为略大于 3 的倍数，这是默认的 TCP 数据包重传窗口。</p><p>一旦您的客户端连接到服务器并发送 HTTP 请求，读取超时就是客户端等待服务器发送响应的秒数。 （具体来说，它是客户端在从服务器发送的字节之间等待的秒数。在 99.9% 的情况下，这是服务器发送第一个字节之前的时间）。</p><p>如果您为超时指定单个值，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>r = requests.get(&#39;https://github.com&#39;, timeout=5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>超时值将应用于连接超时和读取超时。如果您想单独设置值，请指定一个元组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>r = requests.get(&#39;https://github.com&#39;, timeout=(3.05, 27))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果远程服务器很慢，你可以告诉 Requests 永远等待响应，通过传递 None 作为超时值，然后检索一杯咖啡。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>r = requests.get(&#39;https://github.com&#39;, timeout=None)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,92);function p(m,g){const n=l("ExternalLinkIcon");return d(),a("div",null,[v,i("p",null,[e("要将 HTTP Basic Auth 与您的代理一起使用，请在上述任何配置条目中使用 "),i("a",c,[e("http://user:password@host/"),r(n)]),e(" 语法：")]),o])}const h=t(u,[["render",p],["__file","requests.html.vue"]]);export{h as default};
