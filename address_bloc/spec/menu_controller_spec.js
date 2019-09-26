const MenuController = require("../controllers/MenuController");

// #1
 describe("MenuController", () => {


//   describe("#getContactCount()", () => {

     beforeEach(() => {
      this.menu = new MenuController();
    });

// #2
//     it("should return 0 when no contacts are in the book", () => {
//        expect(this.menu.getContactCount()).toBe(0);
//     });

//#3
//     it("should return 1 when there is exactly one contact in the book", () => {
//         this.menu.book.addContact("Bob", "555-5555-5555");
//         expect(this.menu.getContactCount()).toBe(1)
//       });
//#4 checkpoint
//    });


    describe("#getRemindMe()", () => {

      it("it should return a string containing Learning is a life-long pursuit ", () => {
          this.menu = new MenuController();
          expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
      });
    });
 });
