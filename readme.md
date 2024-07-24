## 基于 apifox 生成 ts, client, 字段翻译的demo

详细配置信息见 [openapi-ts-request](https://github.com/openapi-ui/openapi-ts-request)

## 接口名称

### apifox 默认给出的接口命令规则是 path 的最后一截path + using + method

例如：path 为 `/healthcenter/pharmacist/auditRecordAdmin` 的 get 类型接口，则 apifox 给出的接口默认命名为：auditRecordAdmin + Using + Get => auditRecordAdminUsingGet


### apifox 其实是有一个配置文件作为 apifox 的映射，这是我们用到的配置，这个配置文件和 apifox 文档展示的文案其实有略微区别

由于我们真实配置文件取的是 apifox 映射的文件，加上 apifox 对很多 interface 未展示出来，如果你想要更直观的查看接口的具体 interface，可以使用如下网址进行辅助，对辅助网址有任何功能建议，可以在 [openapi-ui](https://github.com/rookie-luochao/openapi-ui) 提出来，搜索接口使用接口名称进行搜索

如何访问辅助网址，例如：[http://www.openapi-ui.com/service?serviceURL=http%3A%2F%2F10.0.0.52%3A7410%2Fv2%2Fapi-docs%3Fgroup%3DHealthCenter_API&importModeType=url](http://www.openapi-ui.com/service?serviceURL=http%3A%2F%2F10.0.0.52%3A7410%2Fv2%2Fapi-docs%3Fgroup%3DHealthCenter_API&importModeType=url)