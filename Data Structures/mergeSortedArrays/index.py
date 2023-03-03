def merge_sorted_lists(list1, list2):
    if len(list1) == 0:
        return list2
    if len(list2) == 0:
        return list1
    
    merged_list = []

    list_item_1 = list1[0]
    list_item_2 = list2[0]

    list_1_idx = 0
    list_2_idx = 0

    while(list_item_1 or list_item_2):
        # if list_1_idx == len(list1) - 1 and list_2_idx == len(list2) - 1:
        #     print("Break mi okoko")
        #     break

        print("while loop iteration", list_item_1, list_item_2, merged_list)
        if (list_1_idx != len(list1) - 1) and list_item_1 < list_item_2:
            print("Less than case")
            merged_list.append(list_item_1)

            if list_1_idx < len(list1) - 1:
                list_1_idx += 1
                list_item_1 = list1[list_1_idx]
        elif list_2_idx != len(list2) - 1:
            print("Greater than case")
            merged_list.append(list_item_2)

            if list_2_idx < len(list2) - 1:
                list_2_idx += 1
                list_item_2 = list2[list_2_idx]

        else:
            print("Else statement break")
            break


    return merged_list

print(merge_sorted_lists([1, 3, 4, 7, 9], [2, 4, 10, 13]))