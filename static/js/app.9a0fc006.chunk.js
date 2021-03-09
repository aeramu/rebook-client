(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{210:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var a,r,o,i,l=n(0),c=n.n(l),s=n(35),u=new s.ApolloClient({uri:"https://rebook-server.herokuapp.com/graphql",cache:new s.InMemoryCache}),d=n(177),m=n(276),g=n(64),f=n.n(g),y=n(9),h=n.n(y),b=n(5),E=n(22),p=n(4),I=n(82),k=n(116),C=function(){return c.a.createElement(p.a,{style:B.header},c.a.createElement(E.a,{style:B.title},"BiblioGig"),c.a.createElement(E.a,{style:B.subtitle},"by Coder x ISH TIBEN"))},B=b.a.create({header:{height:100,backgroundColor:"blue",alignItems:"stretch",alignSelf:"stretch",justifyContent:"flex-start"},title:{fontSize:25,fontWeight:"bold",color:"white",justifyContent:"center",paddingTop:20,paddingBottom:10,paddingLeft:60},subtitle:{fontSize:10,color:"white",justifyContent:"center",paddingBottom:10,paddingLeft:60}}),x=n(115),v=n(62),w=function(e){var t=e.title,n=e.author,a=e.imageUrl,r=e.onPress;return c.a.createElement(x.a,{onPress:r,underlayColor:"white"},c.a.createElement(p.a,{style:j.container},c.a.createElement(v.a,{resizeMode:"cover",style:j.image,source:{uri:a}}),c.a.createElement(p.a,{style:j.tag},c.a.createElement(E.a,{style:j.title,numberOfLines:2},t),c.a.createElement(E.a,{style:j.subtitle,numberOfLines:1},n))))},j=b.a.create({container:{alignItems:"stretch",justifyContent:"flex-start",borderRadius:10,overflow:"hidden",borderWidth:.75,borderColor:"grey",width:210,height:420},image:{height:320},tag:{flex:1,backgroundColor:"white",alignItems:"flex-start",justifyContent:"flex-start",paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:10},title:{fontSize:20,fontWeight:"bold",color:"black"},subtitle:{fontSize:15,color:"grey",justifyContent:"center"}}),D=n(56),S=n(277),$=function(e){var t=e.onChangeText,n=e.onSubmit,a=e.style;return c.a.createElement(p.a,{style:[O.container,a]},c.a.createElement(D.a,{placeholder:"Search...",onChangeText:function(e){return t(e)},style:O.textInput}),c.a.createElement(S.a,{name:"search",onPress:n,size:15}))},O=b.a.create({container:{flexDirection:"row",justifyContent:"space-between",borderWidth:.5,borderColor:"grey",borderRadius:20,padding:10},textInput:{flex:1}}),P=function(e){var t=e.navigation,n=Math.floor(Object(k.a)().width/250),a=c.a.useState(""),r=h()(a,2),o=r[0],i=r[1],l=Object(s.useQuery)(z,{variables:{first:50,after:null,filter:o}}),u=l.loading,d=l.data;return c.a.createElement(p.a,{style:T.container},c.a.createElement(C,null),c.a.createElement($,{style:T.searchBar,onChangeText:i}),u?c.a.createElement(E.a,null,"Loading..."):c.a.createElement(I.a,{key:n,numColumns:n||1,data:d&&d.getBookList.edges,renderItem:function(e){var n,a=e.item;return c.a.createElement(p.a,{style:T.cardContainer},c.a.createElement(w,{title:a.title,author:a.author,imageUrl:a.coverImage,onPress:(n=a.id,function(){t.navigate("Book",{bookId:n})})}))},keyExtractor:function(e){return e.id}}))},T=b.a.create({container:{flex:1,backgroundColor:"white",alignItems:"center",justifyContent:"flex-start"},cardContainer:{margin:20},searchBar:{marginTop:30,marginBottom:20,width:300}}),z=Object(s.gql)(a||(a=f()(["\n  query($first: Int!, $after: String, $filter: String){\n    getBookList(first: $first, after: $after, filter: $filter){\n      edges{\n        id\n        title\n        author\n        coverImage\n      }\n      pageInfo{\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"]))),L=n(139),q=function(e){var t=e.bookID,n=e.style,a=c.a.useState(1),r=h()(a,2),o=r[0],i=r[1],l=c.a.useState(1),u=h()(l,2),d=u[0],m=u[1],g=Object(s.useQuery)(R,{variables:{id:t,page:o}}),f=g.data,y=g.loading;c.a.useEffect((function(){f&&0!=f.getBookByID.summary.totalPage&&m(f.getBookByID.summary.totalPage)}),[f]);return c.a.createElement(p.a,{style:n},c.a.createElement(p.a,{style:W.textContainer},y?c.a.createElement(E.a,null,"Loading..."):c.a.createElement(E.a,null,f.getBookByID.summary.text)),c.a.createElement(p.a,{style:W.buttonContainer},c.a.createElement(L.a,{title:"Previous",onPress:function(){i(o-1)},disabled:1==o}),c.a.createElement(E.a,null,o+"/"+d),c.a.createElement(L.a,{title:"Next",onPress:function(){i(o+1)},disabled:o>=d})))},W=b.a.create({buttonContainer:{alignItems:"center",justifyContent:"space-between",flexDirection:"row",marginTop:40},textContainer:{flex:1}}),R=Object(s.gql)(r||(r=f()(["\n    query($id: ID!, $page: Int!){\n        getBookByID(id: $id){\n            summary(page: $page){\n                text\n                totalPage\n            }\n        }\n    }\n"]))),H=function(e){var t=e.bookID,n=e.style,a=Object(s.useQuery)(Q,{variables:{id:t,first:10}}),r=a.data;return a.loading?c.a.createElement(p.a,{style:n},c.a.createElement(E.a,null,"Loading...")):c.a.createElement(p.a,{style:n},c.a.createElement(E.a,{style:N.containerTitle},"Point of View"),c.a.createElement(I.a,{data:r.getBookByID.reference.edges,renderItem:function(e){var t=e.item;return c.a.createElement(M,{title:t.title,description:t.description,url:t.url})},keyExtractor:function(e){return e.id}}))},M=function(e){var t=e.title,n=e.description,a=e.url;return c.a.createElement(x.a,{underlayColor:"white",onPress:function(){window.open(a)},style:N.cardContainer},c.a.createElement(p.a,null,c.a.createElement(E.a,{style:N.title},t),c.a.createElement(E.a,{style:N.subtitle},n)))},N=b.a.create({containerTitle:{color:"grey",fontSize:25,fontWeight:"bold",marginLeft:10},title:{fontSize:20,fontWeight:"bold"},subtitle:{color:"grey"},cardContainer:{marginVertical:10,padding:10,paddingHorizontal:20,borderRadius:20,borderWidth:.5,borderColor:"grey"}}),Q=Object(s.gql)(o||(o=f()(["\n    query($id: ID!, $first: Int!){\n        getBookByID(id: $id){\n            reference(first: $first){\n                edges{\n                    id\n                    title\n                    description\n                    url\n                    rating\n                }\n            }\n        }\n      }\n"]))),A=function(e){var t=e.route,n=Object(k.a)().height-200,a=Object(s.useQuery)(U,{variables:{id:t.params.bookId}}),r=a.data;return a.loading?c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Loading...")):r?c.a.createElement(p.a,null,c.a.createElement(C,null),c.a.createElement(p.a,{style:J.container},c.a.createElement(p.a,{style:J.image},c.a.createElement(v.a,{style:{height:n,width:2*n/3},source:{uri:r.getBookByID.coverImage},resizeMode:"cover"})),c.a.createElement(p.a,{style:J.containerTitle},c.a.createElement(E.a,{style:J.title},r.getBookByID.title),c.a.createElement(E.a,{style:J.author},r.getBookByID.author),c.a.createElement(q,{bookID:t.params.bookId,style:{height:n-100}}),c.a.createElement(H,{bookID:t.params.bookId,style:J.reference})))):c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Failed to load"))},J=b.a.create({containerTitle:{alignItems:"stretch",justifyContent:"flex-start",flexDirection:"column",flex:1},container:{alignItems:"stretch",justifyContent:"flex-start",flexDirection:"row",padding:30,backgroundColor:"white",flexWrap:"wrap"},image:{marginBottom:20,marginRight:30},title:{fontSize:50,fontWeight:"bold",color:"black"},author:{fontSize:20,color:"grey",marginBottom:10},reference:{marginTop:30}}),U=Object(s.gql)(i||(i=f()(["\n    query($id: ID!){\n        getBookByID(id: $id){\n            id\n            title\n            author\n            coverImage\n        }\n    }\n"]))),V=Object(m.a)(),F=function(){return c.a.createElement(V.Navigator,{screenOptions:{headerShown:!1}},c.a.createElement(V.Screen,{name:"Home",component:P}),c.a.createElement(V.Screen,{name:"Book",component:A}))},G={prefixes:["https://aeramu.github.io/rebook-client","http://localhost:1900"],config:{Home:"",Book:"book/:bookId"}},K=function(){return c.a.createElement(d.a,{linking:G},c.a.createElement(F,null))};function X(){return c.a.createElement(s.ApolloProvider,{client:u},c.a.createElement(K,null))}},220:function(e,t,n){e.exports=n(270)}},[[220,1,2]]]);
//# sourceMappingURL=app.9a0fc006.chunk.js.map