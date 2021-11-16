const Ziggy = {"url":"http:\/\/manage.preciousdoodledogs.com.test","port":null,"defaults":{},"routes":{"laravelpwa.manifest":{"uri":"manifest.json","methods":["GET","HEAD"]},"laravelpwa.":{"uri":"offline","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["GET","POST","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"]},"password.email":{"uri":"password\/email","methods":["POST"]},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirm":{"uri":"password\/confirm","methods":["GET","HEAD"]},"admin.index":{"uri":"admin","methods":["GET","HEAD"]},"admin.dogs.index":{"uri":"admin\/dogs","methods":["GET","HEAD"]},"admin.dogs.create":{"uri":"admin\/dogs\/create","methods":["GET","HEAD"]},"admin.dogs.store":{"uri":"admin\/dogs","methods":["POST"]},"admin.dogs.show":{"uri":"admin\/dogs\/{dog}","methods":["GET","HEAD"]},"admin.dogs.edit":{"uri":"admin\/dogs\/{dog}\/edit","methods":["GET","HEAD"]},"admin.dogs.update":{"uri":"admin\/dogs\/{dog}","methods":["PUT","PATCH"],"bindings":{"dog":"id"}},"admin.dogs.destroy":{"uri":"admin\/dogs\/{dog}","methods":["DELETE"]},"admin.litters.index":{"uri":"admin\/litters","methods":["GET","HEAD"]},"admin.litters.create":{"uri":"admin\/litters\/create","methods":["GET","HEAD"]},"admin.litters.store":{"uri":"admin\/litters","methods":["POST"]},"admin.litters.show":{"uri":"admin\/litters\/{litter}","methods":["GET","HEAD"]},"admin.litters.edit":{"uri":"admin\/litters\/{litter}\/edit","methods":["GET","HEAD"]},"admin.litters.update":{"uri":"admin\/litters\/{litter}","methods":["PUT","PATCH"]},"admin.litters.destroy":{"uri":"admin\/litters\/{litter}","methods":["DELETE"]},"admin.todos.index":{"uri":"admin\/todos","methods":["GET","HEAD"]},"admin.todos.create":{"uri":"admin\/todos\/create","methods":["GET","HEAD"]},"admin.todos.store":{"uri":"admin\/todos","methods":["POST"]},"admin.todos.show":{"uri":"admin\/todos\/{todo}","methods":["GET","HEAD"]},"admin.todos.edit":{"uri":"admin\/todos\/{todo}\/edit","methods":["GET","HEAD"]},"admin.todos.update":{"uri":"admin\/todos\/{todo}","methods":["PUT","PATCH"]},"admin.todos.destroy":{"uri":"admin\/todos\/{todo}","methods":["DELETE"]},"admin.families.index":{"uri":"admin\/families","methods":["GET","HEAD"]},"admin.families.create":{"uri":"admin\/families\/create","methods":["GET","HEAD"]},"admin.families.store":{"uri":"admin\/families","methods":["POST"]},"admin.families.show":{"uri":"admin\/families\/{family}","methods":["GET","HEAD"]},"admin.families.edit":{"uri":"admin\/families\/{family}\/edit","methods":["GET","HEAD"]},"admin.families.update":{"uri":"admin\/families\/{family}","methods":["PUT","PATCH"]},"admin.families.destroy":{"uri":"admin\/families\/{family}","methods":["DELETE"]},"admin.dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"]},"admin.users.index":{"uri":"admin\/users","methods":["GET","HEAD"]},"admin.users.create":{"uri":"admin\/users\/create","methods":["GET","HEAD"]},"admin.users.store":{"uri":"admin\/users","methods":["POST"]},"admin.users.show":{"uri":"admin\/users\/{user}","methods":["GET","HEAD"]},"admin.users.edit":{"uri":"admin\/users\/{user}\/edit","methods":["GET","HEAD"],"bindings":{"user":"id"}},"admin.users.update":{"uri":"admin\/users\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"admin.users.destroy":{"uri":"admin\/users\/{user}","methods":["DELETE"],"bindings":{"user":"id"}},"admin.pages":{"uri":"admin\/pages\/{slug}","methods":["GET","HEAD"]},"admin.page.create":{"uri":"admin\/pages","methods":["POST"]},"admin.page.save":{"uri":"admin\/pages\/{slug}","methods":["POST"]},"admin.page.delete":{"uri":"admin\/pages","methods":["DELETE"]},"admin.settings":{"uri":"admin\/settings","methods":["GET","HEAD"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"profile.show":{"uri":"profile","methods":["GET","HEAD"]},"settings.show":{"uri":"settings","methods":["GET","HEAD"]},"terms.show":{"uri":"terms-of-service","methods":["GET","HEAD"]},"policy.show":{"uri":"privacy-policy","methods":["GET","HEAD"]},"page":{"uri":"{slug}","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
