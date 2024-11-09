const fs = require ('fs');

const UsersStorage = {
    data: [],
    fileName: 'usersProfile.txt',

    add(profile) {
        let profile_exist = this.data.filter((item) => {
            return item.id == profile.id;
        }).pop();

        if (profile_exist == undefined) {
            this.data.push(profile);
        } else {
            this.data[this.data.indexOf(profile_exist)] = profile
        }

    },

    save() {
        fs.writeFileSync(this.fileName, JSON.stringify(this.data))
    },

    load() {
        if (fs.existsSync(this.fileName)) {
            const data = fs.readFileSync(this.fileName);
            this.data = JSON.parse(data);
        }

    },

    remove(id) {
        this.data = this.data.filter((item) => item.id !== id)
    }
};

UsersStorage.load();

console.log("ok1");

UsersStorage.add({
    id: 1,
    firstName: 'Nastaya',
    lasName: 'Kataeva',
});

UsersStorage.add({
    id: 2,
    firstName: 'Yulya',
    lasName: 'Romanova',
});

UsersStorage.add({
    id: 3,
    firstName: 'Olga',
    lasName: 'Kaputina',
});

UsersStorage.remove(1);
UsersStorage.save();

console.log(UsersStorage.data);