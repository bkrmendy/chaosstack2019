import sys

def to_levels(input_string):
    levels = input_string.split("\n")
    return [[int(node) for node in level.split(" ")] for level in levels]

def max_sum(levels):
    max_weight = -1
    for offset in range(len(levels)):
        current_weight = 0
        for (level_number, level) in enumerate(levels):
            current_offset = min(offset, len(levels[level_number]) - 1)
            current_weight += levels[level_number][current_offset]
            if (level_number == len(levels) - 1):
                max_weight = max(max_weight, current_weight)
    return max_weight

print(max_sum(to_levels(sys.argv[1])))