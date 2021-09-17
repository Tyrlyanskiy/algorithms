import { mergeTwoLists, ListNode } from './sortedLists';

describe('When calling mergeTwoLists', () => {
  it('should return merged list', () => {
    const l1: ListNode = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        }
      }
    };

    const l2: ListNode = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null,
        }
      }
    };

    const result = mergeTwoLists(l1, l2);

    expect(result).toEqual({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 2,
            next: {
              val: 3,
              next: {
                next: null,
                val: 4
              },
            },
          },
        },
      },
    });
  });
});
