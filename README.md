# My Frontend Starter Kit
フロント開発スターターキット

## 開発手順
```
yarn // インストール
yarn dev // ローカル起動
yarn build // ビルド
```

## 主な使用ライブラリ・パッケージ
### 基本セット
|  パッケージ名  |  ドキュメント  | メモ  |
| ---- | ---- | ---- |
| vite | [リンク](https://ja.vitejs.dev/) | ビルドツール  |
| react | [リンク](https://react.dev/) | JSライブラリ  |
| typescript | [リンク](https://www.typescriptlang.org/) | 型 |

### ライブラリ系
|  パッケージ名  |  ドキュメント  | メモ  |
| ---- | ---- | ---- |
| react-hook-form | [リンク](https://www.react-hook-form.com/) | フォーム系 v7 |
| react-router-dom | [リンク](https://reactrouter.com/en/main) | ルーティング系 v6 |
| swr | [リンク](https://swr.vercel.app/ja) | フェッチ系  |
| react-helmet-async | [リンク](https://github.com/staylor/react-helmet-async) | headタグ内の記述で使用。react-helmetは古いので使わない  |
| use-react-router-breadcrumbs | [リンク](https://github.com/icd2k3/use-react-router-breadcrumbs) | react-router-domと組み合わせてパンくずリスト作成する  |
| 未選定 | ---| 状態管理ライブラリ。Recoil か Redux？  |

### UI・Styling系
|  パッケージ名  |  ドキュメント  | メモ  |
| ---- | ---- | ---- |
| tailwindcss | [リンク](https://tailwindcss.com/) | CSSフレームワーク |
| preline | [リンク](https://preline.co/) | UIパーツライブラリ tailwindと組み合わせる |
| autoprefixer | --- | tailwindの付随パッケージ |
| postcss | --- | tailwindの付随パッケージ |
| tailwind-merge | [リンク](https://github.com/dcastil/tailwind-merge) | 重複したclassをマージしてくれる。分岐処理とかで活躍 |
| @heroicons/react | [リンク](https://github.com/tailwindlabs/heroicons) | tailwind謹製アイコンセット |
| @tailwindcss/forms | [リンク](https://github.com/tailwindlabs/tailwindcss-forms) | tailwind公式のフォームスタイル。最低限フォームにスタイル当てたい場合に使用。当然上書きも可|

### コードフォーマット系
|  パッケージ名  |  ドキュメント  | メモ  |
| ---- | ---- | ---- |
| eslint | [リンク](https://eslint.org/) | linter |
| prettier | [リンク](https://prettier.io/) | コードフォーマットツール |
| prettier-plugin-tailwindcss | [リンク](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) | tailwindのclass名をルール通りに順番入れ替えたりしている。 |
| husky | [リンク](https://typicode.github.io/husky/) | gitフック。任意のタイミングでscriptを実行できる。pre commit時に使用している。 |
| lint-staged | [リンク](https://github.com/okonet/lint-staged) | 変更ファイルにのみフォーマットかけられるもの。huskyと組み合わせている。 |

## コードフォーマットについて
### フォーマット系のコマンド説明
```
yarn lint // eslintチェック
yarn lint:fix // eslintチェック + eslintのフォーマット
yarn prettier // prettierのフォーマット
yarn format // eslintとprettierのフォーマットを両方実行。pre commit時に実行している。下記詳細説明あり。
```

### pre commitのフォーマットについて
`husky` と `lint-staged` というパッケージを使用して、変更があったts / tsxファイルを対象に  
pre commit 時にコードフォーマットをかけるようにしております。

```
"lint-staged": {
  "*.{ts,tsx}": [
    "yarn format"
  ]
},
```

## ディレクトリ構成について
Comming soon...
