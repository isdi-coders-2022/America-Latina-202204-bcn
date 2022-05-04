import {
  loadAlbumsAction,
  modifyAlbumsAction,
  addAlbumsAction,
  deleteAlbumsAction,
} from "./AlbumsActionCreator";

describe("Given the loadAlbumsAction", () => {
  describe("When called upon", () => {
    test("Then an object with the property type: 'load-albums' will be created", () => {
      const createdAction = loadAlbumsAction();

      const expectedObject = { type: "load-albums" };

      expect(createdAction).toMatchObject(expectedObject);
    });
  });
});

describe("Given the addAlbumsAction", () => {
  describe("When called upon, with and parameter of {title: New album}", () => {
    test("Then an object with the property type: 'add-album' will be created, with a property newAlbum to be {title: New album}", () => {
      const newAlbumObject = { title: "New album" };
      const createdAddAction = addAlbumsAction(newAlbumObject);

      const expectedObject = {
        type: "add-album",
        albumToAdd: newAlbumObject,
      };

      expect(createdAddAction).toEqual(expectedObject);
    });
  });
});

describe("Given the modifyAlbums Action", () => {
  describe("When called upon, with the album 'test album' and new properties {title: modified album}", () => {
    test("Then an object with the property type: 'modify-album' will be created, with a property newAlbum to be {title: New album}", () => {
      const toBeModified = "test album";
      const modifiedProperties = { title: "modified album" };
      const createdAction = modifyAlbumsAction(
        toBeModified,
        modifiedProperties
      );

      const expectedObject = {
        type: "modify-album",
        albumToModify: toBeModified,
        newProperties: modifiedProperties,
      };

      expect(createdAction).toEqual(expectedObject);
    });
  });
});

describe("Given the deleteAlbumsAction", () => {
  describe("When called upon, with the album id '100'", () => {
    test("Then an object with the property type: 'delete-album' will be created, with a property id to be 100", () => {
      const deleteAlbumId = 100;
      const deletedAction = deleteAlbumsAction(deleteAlbumId);

      const expectedObject = {
        type: "delete-album",
        albumIdToDelete: deleteAlbumId,
      };

      expect(deletedAction).toEqual(expectedObject);
    });
  });
});
