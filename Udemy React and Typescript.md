


## if you can not open the site

then please do not comment the code in the action.log also keep 
vpn on, (the image bed is S3, might use the oversea server). also you 
can change the network to mobile data( might be the internet speed as well)


## Udemy React and Typescript
### Goal: Account action: register, login, logout UI and function make
git new branch

I.UI build:
1.Component UI make for the home page, productdetail page, search page:
1) new component build
2) use it in the home page,product Detail Page, serch page
3) 
2.Compoment UI make for the register page, login page:
same as above
3.register UI build:
1) antd form import use
2) css fix
3) confirm password use
4) rules change
Form use

4.login UI build:
1)Form use

git new branch

II.Function build:
3.register logic build

0.Split the regiet page between register page and register form
1) the api usage 
MVC structure
1.failed success
2) retouer to the login page

4.login logic build:
1)Redux State usage


5.logout logic build:
0)Head Component:
1)translation
1) log out UI: decode the token, then acees the email conten
2) an shooping cart
3) login UI and log out UI switch(sanyuan)
4) logout logic will be like:
update the token value to the null, that will trigger the action to the normal UI
6.local storage logic build




## Redeux tookit
1.Linkind lin start :
1)1-3 in the store.js 
[Store Build](https://juejin.cn/post/7032663396160012295#heading-3)
2)slice in userslice.js
3)real useage Feed.js
[redux-toolkit](https://github.dev/GlennOu66304/Linkedin-clone)
2.use it in the component:
1)import the store

```
// 1.import the Hooks
import React, {useEffect, useState} from 'react';
// 2.import the aciton dispatxh and reducer selector
import {useDispatch, useSelector} from 'react-redux';
// 3. reducer import
import {fetchText} from '@/store/demoReducer';
// 4.store import
import store, {StateType} from '@/store';

//5.code start write
export default function HomePage() {
//5.1 define the initail value of dispatch and useSelector
    const dispatch = useDispatch<typeof store.dispatch>();
    
	const content = useSelector((state: StateType) => ({
		text: state.demo.text
	}));
	
	
	const getText = () => {
	//5.2 dispatch the action 
		return dispatch(fetchText()).then(res => {
			console.log(res);
		});
	};
	
	// 6.Hooks use this function
	useEffect(() => {
		getText();
	}, []);
        ...
}

```

[引入状态和派发action：](https://juejin.cn/post/7032663396160012295#heading-3)

Linkind lin start 
Typescript usage
Oficial Doc



## axios react
gtf
social media sites
react admin
Linkinedin
project list
restaurant review (axios)
amazon
Gmail



## Change the language
3.reducer file update: language api use
 ## Redux:
  github
  1.React Didi(React Reduex)
  2.react Admin(Reduex, need to go to the origianl project)
  [React_Admin](https://github.dev/GlennOu66304/react-admin)
  3.Linkedin(React Reduex)
  4.React Typescript
## A.extra webpack log output:
Mainly caused by the react-script version, I tried npm run eject issue, tried to modify some changes in the webpack config, but that is way more complex for me. So I decided to downgrade my react-script version.
Webpack: silence output
https://stackoverflow.com/questions/30756804/webpack-silence-output

By downgrading the creat-react-app's react version to 17.0.1, react-dom to ^17.0.1, then react-script version to 4.0.1 in the package.json, remove the node modules. run npm i, then npm start can fix the extra webpack lout issue

How to downgrade React version 17 to 16?
https://stackoverflow.com/questions/68109043/how-to-downgrade-react-version-17-to-16#:~:text=Search%20for%20the%20react%20and,to%20downgrade%20to%20React%2016.

[CRA 5.0 show webpack's log](https://github.com/facebook/create-react-app/issues/11871)    

## -D, --save-dev: Package will appear in your devDependencies
-D, --save-dev: Package will appear in your devDependencies
[npm-install](https://docs.npmjs.com/cli/v8/commands/npm-install)


## antd MenuItem should not leave undefined `key`.下拉无法回收

you can donwgrade the antd version 
[antd MenuItem should not leave undefined `key`.下拉无法回收](https://blog.csdn.net/lizhen_software/article/details/117691861)


or add key value into the menuItem
[MenuItem Should not leave undefined key](https://www.inflearn.com/questions/321408)


## UI Page refer
Chapter 10.2(Follow the Meituan Project build logic)
## Back end API
API is on the chapter 64

## Ant design

0.github fullstack antd explain:

1.react:滴滴 Project:github react ant design:(config, overide import on demand )

2.React + typescript Travel:github react travel

2.React Admin:react admin

## typescript
1.Video Nest+typescript
2.React + typescript
3.Learning(github)
4.udemy typescript free course 阿莱克斯 Liu



