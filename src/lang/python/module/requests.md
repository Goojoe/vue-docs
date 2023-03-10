---
title: requests
---

## 安装

```
pip install requests
```

## 标准请求

```
import requests
def resp(url):
    # 头部
    headers = {
        'Cookie':'',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
    }

    # 请求资源
    json = {}

    # 代理
    proxy = '127.0.0.1:7890'
    proxies = {
        'http': proxy,
        'https': proxy
    }
    url = url
    response = requests.get(url=url,data=json,headers=headers,proxies=proxies,verify=False)
    print(response.content.decode())

if __name__ == '__main__':
    resp("")
```

# 请求

## HTTP 请求类型

get,post,put,delete,head,options

```
import requests

r = requests.get('https://api.github.com/events')
r = requests.post('https://httpbin.org/post', data={'key': 'value'})
r = requests.put('https://httpbin.org/put', data={'key': 'value'})
r = requests.delete('https://httpbin.org/delete')
r = requests.head('https://httpbin.org/get')
r = requests.options('https://httpbin.org/get')
```

## 在 URL 中传递参数

```
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.get('https://httpbin.org/get', params=payload)
print(r.url)
```

## 回复内容

```
import requests

r = requests.get('https://api.github.com/events')
r.text
'[{"repository":{"open_issues":0,"url":"https://github.com/...
```

## 编码

```
r.encoding = 'ISO-8859-1'
```

## 二进制响应内容

对于非文本请求，您还可以将响应正文作为字节访问：

```
>>> r.content
b'[{"repository":{"open_issues":0,"url":"https://github.com/...
```

gzip 和 deflate 传输编码会自动为您解码。

如果安装了 brotli 或 brotlicffi 等 Brotli 库，则会自动为您解码 br 传输编码。

例如，要从请求返回的二进制数据创建图像，您可以使用以下代码：

```
from PIL import Image
from io import BytesIO

i = Image.open(BytesIO(r.content))
```

## JSON响应内容

还有一个内置的 JSON 解码器，以防您处理 JSON 数据：

```
>>> import requests

>>> r = requests.get('https://api.github.com/events')
>>> r.json()
[{'repository': {'open_issues': 0, 'url': 'https://github.com/...
```

如果 JSON 解码失败，r.json() 会引发异常。例如，如果响应收到 204（无内容），或者如果响应包含无效的 JSON，则尝试 r.json() 会引发 requests.exceptions.JSONDecodeError。此包装异常为不同 python 版本和 json 序列化库可能引发的多个异常提供互操作性。

需要注意的是，调用 r.json() 成功并不代表响应成功。某些服务器可能会在失败的响应中返回 JSON 对象（例如 HTTP 500 的错误详细信息）。这样的 JSON 将被解码并返回。要检查请求是否成功，请使用 r.raise_for_status() 或检查 r.status_code 是否符合您的预期。

## 原始响应内容

在极少数情况下，您想从服务器获取原始套接字响应，您可以访问 r.raw。如果您想这样做，请确保在您的初始请求中设置 stream=True。完成后，您可以执行以下操作：

```
>>> r = requests.get('https://api.github.com/events', stream=True)

>>> r.raw
<urllib3.response.HTTPResponse object at 0x101194810>

>>> r.raw.read(10)
'\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\x03'
```

但是，一般来说，您应该使用这样的模式来保存正在流式传输到文件的内容：

```
with open(filename, 'wb') as fd:
    for chunk in r.iter_content(chunk_size=128):
        fd.write(chunk)
```

使用 Response.iter_content 将处理很多您在直接使用 Response.raw 时必须处理的事情。流式传输下载时，以上是检索内容的首选和推荐方式。请注意，chunk_size 可以自由调整为更适合您的用例的数字。

笔记

关于使用 Response.iter_content 与 Response.raw 的重要说明。 Response.iter_content 将自动解码 gzip 和 deflate 传输编码。 Response.raw 是一个原始的字节流——它不会转换响应内容。如果您确实需要访问返回的字节，请使用 Response.raw。

## 自定义Header

如果您想将 HTTP 标头添加到请求中，只需将 dict 传递给 headers 参数。

例如，我们没有在前面的例子中指定我们的用户代理：

```
url = 'https://api.github.com/some/endpoint'
headers = {'user-agent': 'my-app/0.0.1'}
r = requests.get(url, headers=headers)
```

注意：自定义标题的优先级低于更具体的信息源。例如：

- 如果在 .netrc 中指定了凭据，则使用 headers= 设置的授权标头将被覆盖，而 .netrc 又将被 auth= 参数覆盖。请求将在 ~/.netrc、~/_netrc 或 NETRC 环境变量指定的路径中搜索 netrc 文件。
- 如果您被重定向到主机外，授权标头将被删除。
- Proxy-Authorization 标头将被 URL 中提供的代理凭据覆盖。
- 当我们可以确定内容的长度时，Content-Length 标头将被覆盖。

此外，Requests 根本不会根据指定的自定义标头更改其行为。标头只是简单地传递到最终请求中。

注意：所有标头值必须是字符串、字节串或 unicode。在允许的情况下，建议避免传递 unicode 标头值。

## 更复杂的 POST 请求

通常，您希望发送一些表单编码的数据——很像 HTML 表单。为此，只需将字典传递给 data 参数。发出请求时，您的数据字典将自动进行表单编码：

```
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.post("https://httpbin.org/post", data=payload)
print(r.text)
{
  ...
  "form": {
    "key2": "value2",
    "key1": "value1"
  },
  ...
}
```

data 参数也可以为每个键有多个值。这可以通过使数据成为元组列表或以列表作为值的字典来完成。当表单有多个使用相同键的元素时，这特别有用：

```
>>> payload_tuples = [('key1', 'value1'), ('key1', 'value2')]
>>> r1 = requests.post('https://httpbin.org/post', data=payload_tuples)
>>> payload_dict = {'key1': ['value1', 'value2']}
>>> r2 = requests.post('https://httpbin.org/post', data=payload_dict)
>>> print(r1.text)
{
  ...
  "form": {
    "key1": [
      "value1",
      "value2"
    ]
  },
  ...
}
>>> r1.text == r2.text
True
```

有时您可能希望发送未进行表单编码的数据。如果您传入一个字符串而不是一个字典，则该数据将直接发布。

例如，GitHub API v3 接受 JSON 编码的 POST/PATCH 数据：

```
>>> import json

>>> url = 'https://api.github.com/some/endpoint'
>>> payload = {'some': 'data'}

>>> r = requests.post(url, data=json.dumps(payload))
```

请注意，上面的代码不会添加 Content-Type 标头（因此特别是它不会将其设置为 application/json）。

如果您需要该标头集并且您不想自己对字典进行编码，您也可以使用 json 参数（在 2.4.2 版本中添加）直接传递它，它将自动编码：

```
>>> url = 'https://api.github.com/some/endpoint'
>>> payload = {'some': 'data'}
>>> r = requests.post(url, json=payload)
```

请注意，如果传递数据或文件，则忽略 json 参数。

## 发布一个多部分编码的文件

Requests 让上传多部分编码文件变得简单：

```
>>> url = 'https://httpbin.org/post'
>>> files = {'file': open('report.xls', 'rb')}

>>> r = requests.post(url, files=files)
>>> r.text
{
  ...
  "files": {
    "file": "<censored...binary...data>"
  },
  ...
}
```

您可以显式设置文件名、内容类型和标题：

```
>>> url = 'https://httpbin.org/post'
>>> files = {'file': ('report.xls', open('report.xls', 'rb'), 'application/vnd.ms-excel', {'Expires': '0'})}

>>> r = requests.post(url, files=files)
>>> r.text
{
  ...
  "files": {
    "file": "<censored...binary...data>"
  },
  ...
}
```

如果需要，您可以发送要作为文件接收的字符串：

```
>>> url = 'https://httpbin.org/post'
>>> files = {'file': ('report.csv', 'some,data,to,send\nanother,row,to,send\n')}

>>> r = requests.post(url, files=files)
>>> r.text
{
  ...
  "files": {
    "file": "some,data,to,send\\nanother,row,to,send\\n"
  },
  ...
}
```

如果您将一个非常大的文件作为多部分/表单数据请求发布，您可能需要流式传输请求。默认情况下，requests 不支持此功能，但有一个单独的包支持 - requests-toolbelt。您应该阅读工具带的文档以获取有关如何使用它的更多详细信息。

要在一个请求中发送多个文件，请参阅高级部分。

警告

强烈建议您以二进制模式打开文件。这是因为 Requests 可能会尝试为您提供 Content-Length 标头，如果这样做，此值将设置为文件中的字节数。如果以文本模式打开文件，可能会出现错误。

## 响应状态代码

我们可以查看响应状态码：

```
>>> r = requests.get('https://httpbin.org/get')
>>> r.status_code
200
```

Requests 还带有一个内置的状态码查找对象，以便于参考：

```
>>> r.status_code == requests.codes.ok
True
```

如果我们发出了错误的请求（4XX 客户端错误或 5XX 服务器错误响应），我们可以使用 Response.raise_for_status() 引发它：

```
>>> bad_r = requests.get('https://httpbin.org/status/404')
>>> bad_r.status_code
404

>>> bad_r.raise_for_status()
Traceback (most recent call last):
  File "requests/models.py", line 832, in raise_for_status
    raise http_error
requests.exceptions.HTTPError: 404 Client Error
```

但是，由于 r 的 status_code 是 200，所以当我们调用 raise_for_status() 时，我们得到：

```
>>> r.raise_for_status()
None
```

一切都很好。

## 响应标头

我们可以使用 Python 字典查看服务器的响应头：

```
>>> r.headers
{
    'content-encoding': 'gzip',
    'transfer-encoding': 'chunked',
    'connection': 'close',
    'server': 'nginx/1.0.4',
    'x-runtime': '148ms',
    'etag': '"e1ca502697e5c9317743dc078f67693f"',
    'content-type': 'application/json'
}
```

不过，字典很特别：它只是为 HTTP 标头制作的。根据 RFC 7230，HTTP 标头名称不区分大小写。

因此，我们可以使用我们想要的任何大小写来访问标题：

```
>>> r.headers['Content-Type']
'application/json'

>>> r.headers.get('content-type')
'application/json'
```

根据 RFC 7230，服务器可以多次发送具有不同值的相同标头，但请求将它们组合在一起，因此它们可以在单个映射中的字典中表示，这也是特殊的：

> 接收者可以将具有相同字段名称的多个头字段组合成一个“字段名称：字段值”对，而不改变消息的语义，方法是将每个后续字段值按顺序附加到组合的字段值上，用 a 分隔逗号。

## Cookies

如果响应包含一些 Cookie，您可以快速访问它们：

```
>>> url = 'http://example.com/some/cookie/setting/url'
>>> r = requests.get(url)

>>> r.cookies['example_cookie_name']
'example_cookie_value'
```

要将自己的 cookie 发送到服务器，可以使用 cookies 参数：

```
>>> url = 'https://httpbin.org/cookies'
>>> cookies = dict(cookies_are='working')

>>> r = requests.get(url, cookies=cookies)
>>> r.text
'{"cookies": {"cookies_are": "working"}}'
```

Cookies 在 RequestsCookieJar 中返回，它的作用类似于 dict，但也提供了更完整的接口，适合在多个域或路径上使用。 Cookie jars 也可以传递给请求：

```
>>> jar = requests.cookies.RequestsCookieJar()
>>> jar.set('tasty_cookie', 'yum', domain='httpbin.org', path='/cookies')
>>> jar.set('gross_cookie', 'blech', domain='httpbin.org', path='/elsewhere')
>>> url = 'https://httpbin.org/cookies'
>>> r = requests.get(url, cookies=jar)
>>> r.text
'{"cookies": {"tasty_cookie": "yum"}}'
```

## 重定向和历史

默认情况下，请求将对除 HEAD 之外的所有动词执行位置重定向。

我们可以使用 Response 对象的 history 属性来跟踪重定向。

Response.history 列表包含为完成请求而创建的 Response 对象。该列表按从最早到最近的响应排序。

例如，GitHub 将所有 HTTP 请求重定向到 HTTPS：

```
>>> r = requests.get('http://github.com/')

>>> r.url
'https://github.com/'

>>> r.status_code
200

>>> r.history
[<Response [301]>]
```

如果您使用 GET、OPTIONS、POST、PUT、PATCH 或 DELETE，您可以使用 allow_redirects 参数禁用重定向处理：

```
>>> r = requests.get('http://github.com/', allow_redirects=False)

>>> r.status_code
301

>>> r.history
[]
```

如果你使用 HEAD，你也可以启用重定向：

```
>>> r = requests.head('http://github.com/', allow_redirects=True)

>>> r.url
'https://github.com/'

>>> r.history
[<Response [301]>]
```

## 超时

您可以使用 timeout 参数告诉请求在给定的秒数后停止等待响应。几乎所有生产代码都应在几乎所有请求中使用此参数。不这样做可能会导致您的程序无限期挂起：

```
>>> requests.get('https://github.com/', timeout=0.001)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
requests.exceptions.Timeout: HTTPConnectionPool(host='github.com', port=80): Request timed out. (timeout=0.001)
```

笔记

timeout 不是整个响应下载的时间限制；相反，如果服务器在 timeout 秒内没有发出响应（更准确地说，如果在 timeout 秒内底层套接字上没有收到任何字节），则会引发异常。如果没有明确指定超时，则请求不会超时。

## 错误和异常

如果出现网络问题（例如 DNS 故障、拒绝连接等），Requests 将引发 ConnectionError 异常。

如果 HTTP 请求返回不成功的状态代码，Response.raise_for_status() 将引发 HTTPError。

如果请求超时，则会引发超时异常。

如果请求超过配置的最大重定向数，则会引发 TooManyRedirects 异常。

Requests 显式引发的所有异常都继承自 requests.exceptions.RequestException。

# 高级用法

## 会话对象(Session)

Session 对象允许您跨请求保留某些参数。它还在会话实例发出的所有请求中保留 cookie，并将使用 urllib3 的连接池。因此，如果您向同一主机发出多个请求，则底层 TCP 连接将被重用，这可能会显着提高性能（请参阅 HTTP 持久连接）。

Session 对象具有主请求 API 的所有方法。

让我们在请求中保留一些 cookie：

```
s = requests.Session()

s.get('https://httpbin.org/cookies/set/sessioncookie/123456789')
r = s.get('https://httpbin.org/cookies')

print(r.text)
# '{"cookies": {"sessioncookie": "123456789"}}'
```

会话也可用于向请求方法提供默认数据。这是通过向 Session 对象的属性提供数据来完成的：

```
s = requests.Session()
s.auth = ('user', 'pass')
s.headers.update({'x-test': 'true'})

# both 'x-test' and 'x-test2' are sent
s.get('https://httpbin.org/headers', headers={'x-test2': 'true'})
```

您传递给请求方法的任何字典都将与设置的会话级值合并。方法级参数覆盖会话参数。

但是请注意，即使使用会话，方法级参数也不会在请求之间保持不变。此示例将仅发送带有第一个请求的 cookie，而不会发送第二个请求：

```
s = requests.Session()

r = s.get('https://httpbin.org/cookies', cookies={'from-my': 'browser'})
print(r.text)
# '{"cookies": {"from-my": "browser"}}'

r = s.get('https://httpbin.org/cookies')
print(r.text)
# '{"cookies": {}}'
```

如果您想手动将 cookie 添加到会话中，请使用 Cookie 实用程序函数来操作 Session.cookies。

会话也可以用作上下文管理器：

```
with requests.Session() as s:
    s.get('https://httpbin.org/cookies/set/sessioncookie/123456789')
```

这将确保会话在退出 with 块后立即关闭，即使发生未处理的异常也是如此。

从字典参数中删除一个值

有时您会希望从 dict 参数中省略会话级别的键。为此，您只需在方法级参数中将该键的值设置为 None。它会自动被省略。

您可以直接使用会话中包含的所有值。请参阅会话 API 文档以了解更多信息。



## 请求和响应对象

每当调用 requests.get() 和朋友时，您都在做两件主要的事情。首先，您正在构建一个 Request 对象，该对象将被发送到服务器以请求或查询某些资源。其次，一旦 Requests 从服务器获得响应，就会生成一个 Response 对象。 Response 对象包含服务器返回的所有信息，还包含您最初创建的 Request 对象。这是一个从 Wikipedia 的服务器获取一些非常重要的信息的简单请求：

```
>>> r = requests.get('https://en.wikipedia.org/wiki/Monty_Python')
```

如果我们想访问服务器发回给我们的标头，我们这样做：

```
>>> r.headers
{'content-length': '56170', 'x-content-type-options': 'nosniff', 'x-cache':
'HIT from cp1006.eqiad.wmnet, MISS from cp1010.eqiad.wmnet', 'content-encoding':
'gzip', 'age': '3080', 'content-language': 'en', 'vary': 'Accept-Encoding,Cookie',
'server': 'Apache', 'last-modified': 'Wed, 13 Jun 2012 01:33:50 GMT',
'connection': 'close', 'cache-control': 'private, s-maxage=0, max-age=0,
must-revalidate', 'date': 'Thu, 14 Jun 2012 12:59:39 GMT', 'content-type':
'text/html; charset=UTF-8', 'x-cache-lookup': 'HIT from cp1006.eqiad.wmnet:3128,
MISS from cp1010.eqiad.wmnet:80'}
```

但是，如果我们想获取我们发送给服务器的标头，我们只需访问请求，然后访问请求的标头：

```
>>> r.request.headers
{'Accept-Encoding': 'identity, deflate, compress, gzip',
'Accept': '*/*', 'User-Agent': 'python-requests/1.2.0'}
```



## 准备好的请求(API示例)

每当您从 API 调用或 Session 调用接收到 Response 对象时，请求属性实际上就是使用的 PreparedRequest。在某些情况下，您可能希望在发送请求之前对正文或标头（或其他任何东西）做一些额外的工作。简单的配方如下：

```
from requests import Request, Session

s = Session()

req = Request('POST', url, data=data, headers=headers)
prepped = req.prepare()

# do something with prepped.body
prepped.body = 'No, I want exactly this as the body.'

# do something with prepped.headers
del prepped.headers['Content-Type']

resp = s.send(prepped,
    stream=stream,
    verify=verify,
    proxies=proxies,
    cert=cert,
    timeout=timeout
)

print(resp.status_code)
```

由于您没有对 Request 对象做任何特别的事情，因此您立即准备它并修改 PreparedRequest 对象。然后，您将其与您将发送到 requests.* 或 Session.* 的其他参数一起发送。

但是，上面的代码将失去拥有 Requests Session 对象的一些优点。特别是，会话级状态（例如 cookie）不会应用于您的请求。要获得应用了该状态的 PreparedRequest，请将对 Request.prepare() 的调用替换为对 Session.prepare_request() 的调用，如下所示：

```
from requests import Request, Session

s = Session()
req = Request('GET',  url, data=data, headers=headers)

prepped = s.prepare_request(req)

# do something with prepped.body
prepped.body = 'Seriously, send exactly these bytes.'

# do something with prepped.headers
prepped.headers['Keep-Dead'] = 'parrot'

resp = s.send(prepped,
    stream=stream,
    verify=verify,
    proxies=proxies,
    cert=cert,
    timeout=timeout
)

print(resp.status_code)
```

当您使用准备好的请求流时，请记住它没有考虑环境。如果您使用环境变量来更改请求的行为，这可能会导致问题。例如： REQUESTS_CA_BUNDLE 中指定的自签名 SSL 证书将不予考虑。结果是 SSL: CERTIFICATE_VERIFY_FAILED 被抛出。您可以通过将环境设置显式合并到会话中来解决此问题：

```
from requests import Request, Session

s = Session()
req = Request('GET', url)

prepped = s.prepare_request(req)

# Merge environment settings into session
settings = s.merge_environment_settings(prepped.url, {}, None, None, None)
resp = s.send(prepped, **settings)

print(resp.status_code)
```



## SSL 证书验证

Requests 为 HTTPS 请求验证 SSL 证书，就像 Web 浏览器一样。默认情况下启用 SSL 验证，如果无法验证证书，Requests 将抛出 SSLError：

```
>>> requests.get('https://requestb.in')
requests.exceptions.SSLError: hostname 'requestb.in' doesn't match either of '*.herokuapp.com', 'herokuapp.com'
```

我没有在这个域上设置 SSL，所以它会引发异常。出色的。 GitHub 确实：

```
>>> requests.get('https://github.com')
<Response [200]>
```

您可以通过受信任的 CA 证书验证 CA_BUNDLE 文件或目录的路径：

```
>>> requests.get('https://github.com', verify='/path/to/certfile')
```

或持久的：

```
s = requests.Session()
s.verify = '/path/to/certfile'
```

笔记

如果 verify 设置为目录的路径，则必须使用 OpenSSL 提供的 c_rehash 实用程序处理该目录。

这个受信任的 CA 列表也可以通过 REQUESTS_CA_BUNDLE 环境变量指定。如果未设置 REQUESTS_CA_BUNDLE，则 CURL_CA_BUNDLE 将用作后备。

如果将 verify 设置为 False，请求也可以忽略验证 SSL 证书：

```
>>> requests.get('https://kennethreitz.org', verify=False)
<Response [200]>
```

请注意，当 verify 设置为 False 时，请求将接受服务器提供的任何 TLS 证书，并将忽略主机名不匹配和/或过期证书，这将使您的应用程序容易受到中间人 (MitM) 攻击。在本地开发或测试期间，将 verify 设置为 False 可能很有用。

默认情况下，验证设置为 True。选项 verify 仅适用于主机证书。

## 客户端证书

您还可以指定本地证书用作客户端证书，作为单个文件（包含私钥和证书）或作为两个文件路径的元组：

```
>>> requests.get('https://kennethreitz.org', cert=('/path/client.cert', '/path/client.key'))
<Response [200]>
```

或持久的：

```
s = requests.Session()
s.cert = '/path/client.cert'
```

如果您指定了错误的路径或无效的证书，您将收到 SSLError：

```
>>> requests.get('https://kennethreitz.org', cert='/wrong_path/client.pem')
SSLError: [Errno 336265225] _ssl.c:347: error:140B0009:SSL routines:SSL_CTX_use_PrivateKey_file:PEM lib
```

警告

本地证书的私钥必须未加密。目前，Requests 不支持使用加密密钥。



## CA 证书

Requests 使用包 certifi 中的证书。这允许用户在不更改请求版本的情况下更新其受信任的证书。

在 2.16 版之前，Requests 捆绑了一组它信任的根 CA，这些 CA 来自 Mozilla 信任库。每个请求版本的证书仅更新一次。如果未安装 certifi，则在使用明显较旧版本的 Requests 时，这会导致证书包非常过时。

为了安全起见，我们建议经常升级证书！

## 正文内容工作流程

默认情况下，当您发出请求时，会立即下载响应的正文。您可以覆盖此行为并推迟下载响应正文，直到您使用流参数访问 Response.content 属性：

```
tarball_url = 'https://github.com/psf/requests/tarball/main'
r = requests.get(tarball_url, stream=True)
```

此时只下载了响应标头并且连接保持打开状态，因此允许我们使内容检索有条件：

```
if int(r.headers['content-length']) < TOO_LONG:
  content = r.content
  ...
```

您可以使用 Response.iter_content() 和 Response.iter_lines() 方法进一步控制工作流程。或者，您可以从 Response.raw 的底层 urllib3 urllib3.HTTPResponse 读取未解码的正文。

如果您在发出请求时将流设置为 True，则除非您消耗所有数据或调用 Response.close，否则 Requests 无法将连接释放回池中。这可能导致连接效率低下。如果您发现自己在使用 stream=True 时部分读取了请求正文（或根本不读取它们），您应该在 with 语句中发出请求以确保它始终关闭：

```
with requests.get('https://httpbin.org/get', stream=True) as r:
    # Do things with the response here.
```



## 活着(Belive)

好消息——感谢 urllib3，在会话中保持活动是 100% 自动的！您在会话中发出的任何请求都将自动重用相应的连接！

请注意，只有在读取所有主体数据后，连接才会释放回池中以供重用；请务必将 stream 设置为 False 或读取 Response 对象的 content 属性。



## 流式上传(Upload)

Requests 支持流式上传，允许您发送大型流或文件而无需将它们读入内存。要流式传输和上传，只需为您的 body 提供一个类似文件的对象：

```
with open('massive-body', 'rb') as f:
    requests.post('http://some.url/streamed', data=f)
```

警告

强烈建议您以二进制模式打开文件。这是因为 Requests 可能会尝试为您提供 Content-Length 标头，如果这样做，此值将设置为文件中的字节数。如果以文本模式打开文件，可能会出现错误。



## 块编码请求

Requests 还支持传出和传入请求的分块传输编码。要发送块编码的请求，只需为您的主体提供一个生成器（或任何没有长度的迭代器）：

```
def gen():
    yield 'hi'
    yield 'there'

requests.post('http://some.url/chunked', data=gen())
```

对于分块编码的响应，最好使用 Response.iter_content() 遍历数据。在理想情况下，您将在请求中设置 stream=True，在这种情况下，您可以通过调用 iter_content 并使用 chunk_size 参数 None 来逐块迭代。如果要设置块的最大大小，可以将 chunk_size 参数设置为任意整数。



## POST 多个多部分编码文件

您可以在一个请求中发送多个文件。例如，假设您要将图像文件上传到具有多个文件字段“图像”的 HTML 表单：

```
<input type="file" name="images" multiple="true" required="true"/>
```

为此，只需将文件设置为 (form_field_name, file_info) 的元组列表：

```
>>> url = 'https://httpbin.org/post'
>>> multiple_files = [
...     ('images', ('foo.png', open('foo.png', 'rb'), 'image/png')),
...     ('images', ('bar.png', open('bar.png', 'rb'), 'image/png'))]
>>> r = requests.post(url, files=multiple_files)
>>> r.text
{
  ...
  'files': {'images': 'data:image/png;base64,iVBORw ....'}
  'Content-Type': 'multipart/form-data; boundary=3131623adb2043caaeb5538cc7aa0b3a',
  ...
}
```

警告

强烈建议您以二进制模式打开文件。这是因为 Requests 可能会尝试为您提供 Content-Length 标头，如果这样做，此值将设置为文件中的字节数。如果以文本模式打开文件，可能会出现错误。



## 事件挂钩

Requests 有一个钩子系统，您可以使用它来操纵请求过程的一部分或信号事件处理。

可用的钩子：

- 回复：

  从请求生成的响应。

您可以通过将 {hook_name: callback_function} 字典传递给 hooks 请求参数来为每个请求分配一个钩子函数：

```
hooks={'response': print_url}
```

该回调函数将接收一大块数据作为其第一个参数。

```
def print_url(r, *args, **kwargs):
    print(r.url)
```

您的回调函数必须处理自己的异常。任何未处理的异常都不会静默传递，因此应由调用 Requests 的代码处理。

如果回调函数返回一个值，则假定它是替换传入的数据。如果该函数没有返回任何内容，则不会影响其他任何内容。

```
def record_hook(r, *args, **kwargs):
    r.hook_called = True
    return r
```

让我们在运行时打印一些请求方法参数：

```
>>> requests.get('https://httpbin.org/', hooks={'response': print_url})
https://httpbin.org/
<Response [200]>
```

您可以向单个请求添加多个挂钩。让我们一次调用两个钩子：

```
>>> r = requests.get('https://httpbin.org/', hooks={'response': [print_url, record_hook]})
>>> r.hook_called
True
```

您还可以将挂钩添加到 Session 实例。然后，您添加的任何钩子都将在对会话发出的每个请求上被调用。例如：

```
>>> s = requests.Session()
>>> s.hooks['response'].append(print_url)
>>> s.get('https://httpbin.org/')
 https://httpbin.org/
 <Response [200]>
```

一个 Session 可以有多个钩子，它们会按照添加的顺序被调用。



## 自定义身份验证

Requests 允许您指定自己的身份验证机制。

任何作为 auth 参数传递给请求方法的可调用对象都将有机会在请求被分派之前对其进行修改。

身份验证实现是 AuthBase 的子类，并且易于定义。 Requests 在 requests.auth 中提供了两种常见的身份验证方案实现：HTTPBasicAuth 和 HTTPDigestAuth。

假设我们有一个 Web 服务，只有在 X-Pizza 标头设置为密码值时才会响应。不太可能，但随它去吧。

```
from requests.auth import AuthBase

class PizzaAuth(AuthBase):
    """Attaches HTTP Pizza Authentication to the given Request object."""
    def __init__(self, username):
        # setup any auth-related data here
        self.username = username

    def __call__(self, r):
        # modify and return the request
        r.headers['X-Pizza'] = self.username
        return r
```

然后，我们可以使用我们的 Pizza Auth 发出请求：

```
>>> requests.get('http://pizzabin.org/admin', auth=PizzaAuth('kenneth'))
<Response [200]>
```



## 流式传输请求

使用 Response.iter_lines() 您可以轻松地迭代流式 API，例如 Twitter 流式 API。只需将 stream 设置为 True 并使用 iter_lines 迭代响应：

```
import json
import requests

r = requests.get('https://httpbin.org/stream/20', stream=True)

for line in r.iter_lines():

    # filter out keep-alive new lines
    if line:
        decoded_line = line.decode('utf-8')
        print(json.loads(decoded_line))
```

将 decode_unicode=True 与 Response.iter_lines() 或 Response.iter_content() 一起使用时，您需要提供一种备用编码，以防服务器不提供：

```
r = requests.get('https://httpbin.org/stream/20', stream=True)

if r.encoding is None:
    r.encoding = 'utf-8'

for line in r.iter_lines(decode_unicode=True):
    if line:
        print(json.loads(line))
```

警告

iter_lines 不是可重入安全的。多次调用此方法会导致部分接收到的数据丢失。如果您需要从多个位置调用它，请改用生成的迭代器对象：

```
lines = r.iter_lines()
# Save the first line for later or just skip it

first_line = next(lines)

for line in lines:
    print(line)
```



## 代理(Proxy)

如果您需要使用代理，您可以使用代理参数为任何请求方法配置单个请求：

```
import requests

proxies = {
  'http': 'http://10.10.1.10:3128',
  'https': 'http://10.10.1.10:1080',
}

requests.get('http://example.org', proxies=proxies)
```

或者，您可以为整个会话配置一次：

```
import requests

proxies = {
  'http': 'http://10.10.1.10:3128',
  'https': 'http://10.10.1.10:1080',
}
session = requests.Session()
session.proxies.update(proxies)

session.get('http://example.org')
```

警告

设置 session.proxies 的行为可能与预期不同。提供的值将被环境代理（由 urllib.request.getproxies 返回的那些）覆盖。为了确保在存在环境代理的情况下使用代理，请在所有单独的请求中明确指定代理参数，如上文最初所述。

有关详细信息，请参阅#2018。

如上所示，当每个请求未覆盖代理配置时，请求依赖于由标准环境变量 http_proxy、https_proxy、no_proxy 和 all_proxy 定义的代理配置。还支持这些变量的大写变体。因此，您可以将它们设置为配置请求（仅设置与您的需求相关的请求）：

```
$ export HTTP_PROXY="http://10.10.1.10:3128"
$ export HTTPS_PROXY="http://10.10.1.10:1080"
$ export ALL_PROXY="socks5://10.10.1.10:3434"

$ python
>>> import requests
>>> requests.get('http://example.org')
```

要将 HTTP Basic Auth 与您的代理一起使用，请在上述任何配置条目中使用 http://user:password@host/ 语法：

```
$ export HTTPS_PROXY="http://user:pass@10.10.1.10:1080"

$ python
>>> proxies = {'http': 'http://user:pass@10.10.1.10:3128/'}
```

警告

将敏感的用户名和密码信息存储在环境变量或版本控制文件中存在安全风险，强烈建议不要这样做。

要为特定方案和主机提供代理，请使用 scheme://hostname 形式作为密钥。这将匹配对给定方案和确切主机名的任何请求。

```
proxies = {'http://10.20.1.128': 'http://10.10.1.10:5323'}
```

请注意，代理 URL 必须包含方案。

最后，请注意，使用代理进行 https 连接通常需要您的本地计算机信任代理的根证书。默认情况下，可以通过以下方式找到请求信任的证书列表：

```
from requests.utils import DEFAULT_CA_BUNDLE_PATH
print(DEFAULT_CA_BUNDLE_PATH)
```

您可以通过将 REQUESTS_CA_BUNDLE（或 CURL_CA_BUNDLE）环境变量设置为另一个文件路径来覆盖此默认证书包：

```
$ export REQUESTS_CA_BUNDLE="/usr/local/myproxy_info/cacert.pem"
$ export https_proxy="http://10.10.1.10:1080"

$ python
>>> import requests
>>> requests.get('https://example.org')
```

### Socks5

*版本 2.10.0 中的新功能。*

除了基本的 HTTP 代理之外，Requests 还支持使用 SOCKS 协议的代理。这是一项可选功能，需要在使用前安装其他第三方库。

您可以从 pip 获取此功能的依赖项：

```
pip install requests[socks]
```

一旦你安装了这些依赖项，使用 SOCKS 代理就像使用 HTTP 一样简单：

```
proxies = {
    'http': 'socks5://user:pass@host:port',
    'https': 'socks5://user:pass@host:port'
}
```

使用方案 socks5 会导致 DNS 解析发生在客户端上，而不是代理服务器上。这与 curl 一致，它使用该方案来决定是在客户端还是代理上进行 DNS 解析。如果要解析代理服务器上的域，请使用 socks5h 作为方案。



## 遵守规范

Requests 旨在符合所有相关规范和 RFC，这些规范和 RFC 不会给用户带来困难。这种对规范的关注可能会导致一些对不熟悉相关规范的人来说可能看起来不寻常的行为。

### 编码

当您收到响应时，Requests 会在您访问 Response.text 属性时猜测用于解码响应的编码。请求将首先检查 HTTP 标头中的编码，如果不存在，将使用 charset_normalizer 或 chardet 尝试猜测编码。

如果安装了 chardet，则 requests 使用它，但是对于 python3 chardet 不再是强制依赖项。 chardet 库是一个 LGPL 许可的依赖项，一些请求用户不能依赖于强制性 LGPL 许可的依赖项。

当您安装请求时未指定额外的 [use_chardet_on_py3]，并且尚未安装 chardet，请求使用 charset-normalizer（MIT 许可）来猜测编码。

Requests 唯一不会猜测编码的情况是 HTTP 标头中不存在显式字符集并且 Content-Type 标头包含文本。在这种情况下，RFC 2616 指定默认字符集必须是 ISO-8859-1。在这种情况下，请求遵循规范。如果您需要不同的编码，您可以手动设置 Response.encoding 属性，或使用原始的 Response.content。



## HTTP 动词

Requests 提供对几乎所有 HTTP 动词的访问：GET、OPTIONS、HEAD、POST、PUT、PATCH 和 DELETE。下面提供了使用 GitHub API 在请求中使用这些不同动词的详细示例。

我们将从最常用的动词开始：GET。 HTTP GET 是一种从给定 URL 返回资源的幂等方法。因此，它是您在尝试从 Web 位置检索数据时应该使用的动词。一个示例用法是尝试从 GitHub 获取有关特定提交的信息。假设我们想要在 Requests 上提交 a050faf。我们会这样得到它：

```
>>> import requests
>>> r = requests.get('https://api.github.com/repos/psf/requests/git/commits/a050faf084662f3a352dd1a941f2c7c9f886d4ad')
```

我们应该确认 GitHub 响应正确。如果有，我们想弄清楚它是什么类型的内容。这样做：

```
>>> if r.status_code == requests.codes.ok:
...     print(r.headers['content-type'])
...
application/json; charset=utf-8
```

因此，GitHub 返回 JSON。太好了，我们可以使用 r.json 方法将其解析为 Python 对象。

```
>>> commit_data = r.json()

>>> print(commit_data.keys())
['committer', 'author', 'url', 'tree', 'sha', 'parents', 'message']

>>> print(commit_data['committer'])
{'date': '2012-05-10T11:10:50-07:00', 'email': 'me@kennethreitz.com', 'name': 'Kenneth Reitz'}

>>> print(commit_data['message'])
makin' history
```

到目前为止，如此简单。好吧，让我们稍微研究一下 GitHub API。现在，我们可以查看文档，但如果我们使用 Requests 代替，我们可能会更有趣。我们可以利用 Requests OPTIONS 动词来查看我们刚刚使用的 url 支持哪些类型的 HTTP 方法。

```
>>> verbs = requests.options(r.url)
>>> verbs.status_code
500
```

呃，什么？那是无益的！事实证明 GitHub 和许多 API 提供者一样，实际上并没有实现 OPTIONS 方法。这是一个令人讨厌的疏忽，但没关系，我们可以使用无聊的文档。但是，如果 GitHub 正确实现了 OPTIONS，它们应该在标头中返回允许的方法，例如

```
>>> verbs = requests.options('http://a-good-website.com/api/cats')
>>> print(verbs.headers['allow'])
GET,HEAD,POST,OPTIONS
```

转向文档，我们看到唯一允许提交的其他方法是 POST，它创建一个新的提交。当我们使用 Requests 存储库时，我们可能应该避免对其进行粗暴的 POSTS。相反，让我们使用 GitHub 的问题功能。

添加此文档以响应问题 #482。鉴于此问题已经存在，我们将使用它作为示例。让我们从得到它开始。

```
>>> r = requests.get('https://api.github.com/repos/psf/requests/issues/482')
>>> r.status_code
200

>>> issue = json.loads(r.text)

>>> print(issue['title'])
Feature any http verb in docs

>>> print(issue['comments'])
3
```

很酷，我们有三个评论。让我们来看看他们中的最后一个。

```
>>> r = requests.get(r.url + '/comments')
>>> r.status_code
200

>>> comments = r.json()

>>> print(comments[0].keys())
['body', 'url', 'created_at', 'updated_at', 'user', 'id']

>>> print(comments[2]['body'])
Probably in the "advanced" section
```

嗯，这似乎是一个愚蠢的地方。让我们发表一条评论，告诉海报他很傻。到底是谁的海报？

```
>>> print(comments[2]['user']['login'])
kennethreitz
```

好的，所以让我们告诉这个 Kenneth 家伙，我们认为这个示例应该放在快速入门指南中。根据 GitHub API 文档，执行此操作的方法是 POST 到线程。我们开始做吧。

```
>>> body = json.dumps({u"body": u"Sounds great! I'll get right on it!"})
>>> url = u"https://api.github.com/repos/psf/requests/issues/482/comments"

>>> r = requests.post(url=url, data=body)
>>> r.status_code
404
```

呵呵，这很奇怪。我们可能需要进行身份验证。那会很痛苦，对吧？错误的。 Requests 使使用多种形式的身份验证变得容易，包括非常常见的基本身份验证。

```
>>> from requests.auth import HTTPBasicAuth
>>> auth = HTTPBasicAuth('fake@example.com', 'not_a_real_password')

>>> r = requests.post(url=url, data=body, auth=auth)
>>> r.status_code
201

>>> content = r.json()
>>> print(content['body'])
Sounds great! I'll get right on it.
```

杰出的。哦，等等，不！我想补充一点，这需要我一段时间，因为我必须去喂我的猫。要是我能编辑这条评论就好了！令人高兴的是，GitHub 允许我们使用另一个 HTTP 动词 PATCH 来编辑此评论。让我们这样做。

```
>>> print(content[u"id"])
5804413

>>> body = json.dumps({u"body": u"Sounds great! I'll get right on it once I feed my cat."})
>>> url = u"https://api.github.com/repos/psf/requests/issues/comments/5804413"

>>> r = requests.patch(url=url, data=body, auth=auth)
>>> r.status_code
200
```

出色的。现在，为了折磨这个肯尼斯家伙，我决定让他出汗，而不是告诉他我正在努力。这意味着我想删除这条评论。 GitHub 允许我们使用非常贴切的 DELETE 方法删除评论。让我们摆脱它。

```
>>> r = requests.delete(url=url, auth=auth)
>>> r.status_code
204
>>> r.headers['status']
'204 No Content'
```

出色的。全没了。我想知道的最后一件事是我使用了多少速率限制。让我们来了解一下。 GitHub 在标头中发送该信息，因此我将发送 HEAD 请求以获取标头，而不是下载整个页面。

```
>>> r = requests.head(url=url, auth=auth)
>>> print(r.headers)
...
'x-ratelimit-remaining': '4995'
'x-ratelimit-limit': '5000'
...
```

出色的。是时候编写一个以各种令人兴奋的方式滥用 GitHub API 的 Python 程序了，4995 次以上。



## 自定义动词

有时，您可能会使用服务器，无论出于何种原因，该服务器允许使用甚至需要使用上面未涵盖的 HTTP 动词。一个例子是一些 WEBDAV 服务器使用的 MKCOL 方法。不要担心，这些仍然可以与请求一起使用。这些使用内置的 .request 方法。例如：

```
>>> r = requests.request('MKCOL', url, data=data)
>>> r.status_code
200 # Assuming your call was correct
```

利用这一点，您可以使用服务器允许的任何方法动词。



## 链接头

许多 HTTP API 都具有链接头。它们使 API 更具自我描述性和可发现性。

GitHub 在其 API 中使用这些进行分页，例如：

```
>>> url = 'https://api.github.com/users/kennethreitz/repos?page=1&per_page=10'
>>> r = requests.head(url=url)
>>> r.headers['link']
'<https://api.github.com/users/kennethreitz/repos?page=2&per_page=10>; rel="next", <https://api.github.com/users/kennethreitz/repos?page=6&per_page=10>; rel="last"'
```

请求将自动解析这些链接头并使其易于使用：

```
>>> r.links["next"]
{'url': 'https://api.github.com/users/kennethreitz/repos?page=2&per_page=10', 'rel': 'next'}

>>> r.links["last"]
{'url': 'https://api.github.com/users/kennethreitz/repos?page=7&per_page=10', 'rel': 'last'}
```



## 传输适配器

从 v1.0.0 开始，Requests 已转向模块化内部设计。这样做的部分原因是为了实现传输适配器，最初在此处描述。传输适配器提供了一种机制来定义 HTTP 服务的交互方法。特别是，它们允许您应用每个服务的配置。

请求附带一个传输适配器，即 HTTPAdapter。此适配器使用强大的 urllib3 库提供与 HTTP 和 HTTPS 的默认请求交互。每当初始化 Requests Session 时，其中一个附加到 HTTP 的 Session 对象，一个附加到 HTTPS。

Requests 使用户能够创建和使用他们自己的提供特定功能的传输适配器。创建后，可以将传输适配器安装到 Session 对象，以及它应该应用于哪些 Web 服务的指示。

```
>>> s = requests.Session()
>>> s.mount('https://github.com/', MyAdapter())
```

挂载调用将传输适配器的特定实例注册到前缀。安装后，使用 URL 以给定前缀开头的会话发出的任何 HTTP 请求都将使用给定的传输适配器。

实现传输适配器的许多细节超出了本文档的范围，但请看下一个简单 SSL 用例的示例。不仅如此，您还可以查看 BaseAdapter 的子类化。

### 示例：特定 SSL 版本

Requests 团队已做出特定选择，以使用基础库 (urllib3) 中默认的任何 SSL 版本。通常这很好，但有时，您可能会发现自己需要连接到使用与默认版本不兼容的服务端点。

您可以为此使用传输适配器，方法是采用大部分现有的 HTTPAdapter 实现，并添加一个传递给 urllib3 的参数 ssl_version。我们将制作一个传输适配器，指示库使用 SSLv3：

```
import ssl
from urllib3.poolmanager import PoolManager

from requests.adapters import HTTPAdapter


class Ssl3HttpAdapter(HTTPAdapter):
    """"Transport adapter" that allows us to use SSLv3."""

    def init_poolmanager(self, connections, maxsize, block=False):
        self.poolmanager = PoolManager(
            num_pools=connections, maxsize=maxsize,
            block=block, ssl_version=ssl.PROTOCOL_SSLv3)
```



## 阻塞还是非阻塞？

使用默认传输适配器，Requests 不提供任何类型的非阻塞 IO。 Response.content 属性将被阻塞，直到整个响应被下载。如果您需要更多粒度，库的流式传输功能（请参阅流式传输请求）允许您一次检索更少量的响应。但是，这些调用仍将阻塞。

如果您担心阻塞 IO 的使用，有很多项目将请求与 Python 的异步框架之一结合起来。一些优秀的例子是 requests-threads、grequests、requests-futures 和 httpx。

## 标题排序

在不寻常的情况下，您可能希望以有序的方式提供标题。如果您将 OrderedDict 传递给 headers 关键字参数，则会为标题提供排序。但是，请求使用的默认标头的顺序将是首选，这意味着如果您在 headers 关键字参数中覆盖默认标头，与该关键字参数中的其他标头相比，它们可能会出现乱序。

如果这是有问题的，用户应该考虑通过将 Session 设置为自定义 OrderedDict 来设置 Session 对象的默认标头。该排序将始终是首选。



## 超时

大多数对外部服务器的请求都应该附加超时，以防服务器没有及时响应。默认情况下，除非明确设置超时值，否则请求不会超时。如果没有超时，您的代码可能会挂起几分钟或更长时间。

连接超时是请求将等待您的客户端在套接字上建立与远程机器的连接（对应于 connect()）调用的秒数。最好将连接超时设置为略大于 3 的倍数，这是默认的 TCP 数据包重传窗口。

一旦您的客户端连接到服务器并发送 HTTP 请求，读取超时就是客户端等待服务器发送响应的秒数。 （具体来说，它是客户端在从服务器发送的字节之间等待的秒数。在 99.9% 的情况下，这是服务器发送第一个字节之前的时间）。

如果您为超时指定单个值，如下所示：

```
r = requests.get('https://github.com', timeout=5)
```

超时值将应用于连接超时和读取超时。如果您想单独设置值，请指定一个元组：

```
r = requests.get('https://github.com', timeout=(3.05, 27))
```

如果远程服务器很慢，你可以告诉 Requests 永远等待响应，通过传递 None 作为超时值，然后检索一杯咖啡。

```
r = requests.get('https://github.com', timeout=None)
```