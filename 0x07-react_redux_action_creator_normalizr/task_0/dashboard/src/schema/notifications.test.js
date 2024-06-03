import getAllNotificationsByUser from "./notifications";

describe('getAllNotificationsByUser', () => {
    it('returns the right data when a valid id is entered', () => {
        const returnedData = getAllNotificationsByUser('5debd764a7c57c7839d722e9')
        const expectedData = [
            {
              guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
              isRead: true,
              type: "urgent",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            },
            {
              guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
              isRead: false,
              type: "urgent",
              value:
                "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
            }
          ]
        
        expect(returnedData).toEqual(expectedData);
    });
    
});
