import { FdLanguage } from '../models/lang';

/**
 * Default set of translations of Fundamental UI library for Russian language
 */
export const FD_LANGUAGE_RUSSIAN: FdLanguage = {
    coreMultiComboBox: {
        selectAllLabel: 'Выбрать все ({selectedItems} из {totalItems})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'Перейти к предыдущему элементу',
        rightNavigationBtnLabel: 'Перейти к следующему элементу'
    },
    coreDatePicker: {
        dateInputLabel: 'Поле ввода даты',
        dateRangeInputLabel: 'Поле ввода диапазона дат',
        displayCalendarToggleLabel: 'Открыть средство выбора',
        valueStateSuccessMessage: 'Значение состояния: Успех',
        valueStateInformationMessage: 'Значение состояния: Информационное',
        valueStateWarningMessage: 'Значение состояния: Предупреждение',
        valueStateErrorMessage: 'Значение состояния: Ошибка'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Поле ввода даты и времени',
        displayDatetimeToggleLabel: 'Показать календарь',
        displayTypeDateLabel: 'Дата',
        displayTypeTimeLabel: 'Время',
        datetimeOkLabel: 'ОК',
        datetimeCancelLabel: 'Отменить'
    },
    coreFeedListItem: {
        moreLabel: 'Больше',
        lessLabel: 'Меньше'
    },
    coreGridList: {
        filterBarCancelButtonTitle: 'Отмена',
        listItemStatusAriaLabel: 'Элемент имеет статус. Статус: {status}.',
        listItemCounterAriaLabel:
            'Элемент имеет { count, plural, one {1 дочерний элемент} few {# дочерних элемента} other {# дочерних элементов} }.',
        listItemButtonDetailsTitle: 'Подробности',
        listItemButtonDeleteTitle: 'Удалить',
        listItemStatusContainsErrors: 'Содержит ошибки',
        listItemStatusLocked: 'Заблокировано',
        listItemStatusDraft: 'Черновик'
    },
    coreMessageStrip: {
        dismissLabel: 'Закрыть'
    },
    coreMultiInput: {
        multiInputAriaLabel: 'Multi Value Input'
    },
    coreNavigation: {
        mainNavigation: 'Главная Навигация',
        navigationPath: 'Путь навигации'
    },
    coreNestedList: {
        linkItemAriaLabel: 'Элемент дерева {itemDetails}, {index} из {total}{selectedDescription}'
    },
    coreOverflowLayout: {
        moreItemsButton: 'Еще { count, plural, one {1 елемент} few {# елемента} other {# елементов} }'
    },
    corePagination: {
        pageLabel: 'Страница {pageNumber}',
        currentPageAriaLabel: 'Страница {pageNumber} активна',
        labelBeforeInputMobile: 'Страница:',
        labelAfterInputMobile: 'из {totalCount}',
        inputAriaLabel: 'Поле ввода страницы, Текущая страница, Страница {pageNumber} из {totalCount}',
        itemsPerPageLabel: 'Результатов на странице:',
        firstLabel: 'Перейти к первой',
        previousLabel: 'Перейти к предыдущей',
        nextLabel: 'Перейти к следующей',
        lastLabel: 'Перейти к последней',
        ariaLabel: 'Нумерация страниц',
        totalResultsLabel: '{totalCount} результатов'
    },
    coreProductSwitch: {
        ariaLabel: 'Переключатель'
    },
    coreShellbar: {
        collapsedItemMenuLabel: 'Свернутое меню элементов',
        cancel: 'Отмена',
        search: 'Поиск'
    },
    coreSlider: {
        singleMinMaxDetails: 'Минимальное значение слайдера {min}, максимальное значение {max}',
        singleValueminDetails: 'Значение равно {value}',
        singleValuemaxDetails: 'Значение равно {value}',
        singleValueNowDetails: 'Текущее значение: {value}',
        multipleHandle1MinMaxDetails: 'Минимальное значение слайдера {min}, максимальное значение {max}',
        multipleHandle1ValueminDetails: 'Значение равно {value}',
        multipleHandle1ValuemaxDetails: 'Значение равно {value}',
        multipleHandle1ValueNowDetails: 'Текущее значение: {value}',
        multipleHandle2MinMaxDetails: 'Минимальное значение слайдера {min}, максимальное значение {max}',
        multipleHandle2ValueminDetails: 'Значение равно {value}',
        multipleHandle2ValuemaxDetails: 'Значение равно {value}',
        multipleHandle2ValueNowDetails: 'Текущее значение: {value}'
    },
    coreSplitButton: {
        expandButtonAriaLabel: 'Больше действий',
        arialLabel: 'Кнопка разделения'
    },
    coreSplitter: {
        paginationItemAriaLabel: 'Секция'
    },
    coreStepInput: {
        incrementButtonTitle: 'Увеличить',
        decrementButtonTitle: 'Уменьшить',
        ariaRoleDescription: 'Шаг ввода'
    },
    coreSwitch: {
        semanticAcceptLabel: 'Принять',
        semanticDeclineLabel: 'Отклонить'
    },
    coreTabs: {
        tabListExpandButtonText: 'Больше'
    },
    coreText: {
        moreLabel: 'Больше',
        lessLabel: 'Меньше'
    },
    coreTime: {
        componentAriaName: 'Выбор времени',
        increaseHoursLabel: 'Увеличить часы',
        hoursLabel: 'Час',
        decreaseHoursLabel: 'Уменьшить часы',
        increaseMinutesLabel: 'Увеличить минуты',
        minutesLabel: 'Мин',
        decreaseMinutesLabel: 'Уменьшить минуты',
        increaseSecondsLabel: 'Увеличить секунды',
        secondsLabel: 'Сек',
        decreaseSecondsLabel: 'Уменьшить секунды',
        increasePeriodLabel: 'Увеличить период',
        periodLabel: 'Период',
        decreasePeriodLabel: 'Уменьшить период',
        navigationInstruction:
            'Для перемещения между элементами в этом списке используйте стрелку вверх или вниз. ' +
            'Для переключения между списками используйте стрелку влево или вправо.'
    },
    coreTimePicker: {
        timePickerInputLabel: 'Поле ввода времени',
        timePickerButtonLabel: 'Открыть окно выбора'
    },
    coreToken: {
        deleteButtonLabel: 'Удаляемый',
        ariaRoleDescription: 'токен'
    },
    coreTokenizer: {
        moreLabel: 'Еще { count, plural, one {1 елемент} few {# елемента} other {# елементов} }'
    },
    coreUploadCollection: {
        menuOkText: 'ОК',
        menuCancelText: 'Отменить',
        menuEditAriaLabel: 'Редактировать',
        menuDeleteAriaLabel: 'Удалить',
        menuOkAriaLabel: 'Редактировать',
        menuCancelAriaLabel: 'Отменить',
        formItemPlaceholder: 'Имя файла'
    },
    coreWizard: {
        ariaLabel: 'Мастер'
    },
    coreBreadcrumb: {
        overflowTitleMore: 'Больше'
    },
    platformActionBar: {
        backButtonLabel: 'Вернуться назад'
    },
    platformApprovalFlow: {
        defaultWatchersLabel: 'Наблюдатели',
        defaultTitle: 'Процесс утверждения',
        nextButtonAriaLabel: 'Перейти к следующему слайд',
        prevButtonAriaLabel: 'Перейти к предыдущему слайду',
        editModeSaveButtonLabel: 'Сохранить',
        editModeExitButtonLabel: 'Выйти',
        emptyTitle: 'Начать добавлять утверждающих и наблюдателей',
        emptyHint:
            'Чтобы добавить утверждающих, нажмите "Добавить шаг". Чтобы добавить наблюдателей, нажмите поле Наблюдатели.',
        addNodeDialogHeaderAddApprovers: 'Добавить утверждающего',
        addNodeDialogHeaderEditApprover: 'Редактировать утверждающего',
        addNodeDialogHeaderAddApproverTeam: 'Пользователь/Команда',
        addNodeDialogHeaderDetail: 'Детали',
        addNodeDialogNodeType: 'Параллельный или последовательный',
        addNodeDialogNodeTypeSerial: 'Последовательный',
        addNodeDialogNodeTypeParallel: 'Параллельный',
        addNodeDialogApproverType: 'Тип утверждающего',
        addNodeDialogApproverTypeUser: 'Пользователь',
        addNodeDialogApproverTypeTeamAnyone: 'Любой из команды',
        addNodeDialogApproverTypeTeamEveryone: 'Все в команде',
        addNodeDialogUserOrTeam: 'Пользователь/Команда',
        addNodeDialogAddToNext: 'Добавить в следующий последовательный узел',
        addNodeDialogDueDate: 'Дата выполнения',
        addNodeSearchPlaceholder: 'Поиск',
        addNodeAddActionBtnLabel: 'Добавить',
        addNodeCancelActionBtnLabel: 'Отмена',
        addNodeSelectApproverActionBtnLabel: 'Выбрать',
        addNodeCancelApproverSelectionActionBtnLabel: 'Выйти',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Закрыть',
        userDetailsHeader: 'Детали',
        userDetailsSendReminderBtnLabel: 'Отправить напоминание',
        userDetailsCancelBtnLabel: 'Отменить',
        messagesApproverAddedSuccess: '1 утверждающий добавлен',
        messagesTeamAddedSuccess: '1 команда добавлена',
        messagesNodeEdited: '1 утверждающий отредактирован',
        messagesNodeRemovedSingular: '1 утверждающий удален',
        messagesNodeRemovedPlural: 'Утверждающие удалены',
        messagesTeamRemoved: '1 команда удалена',
        messagesErrorBuildGraph: 'При попытке построить график произошла ошибка. Проверьте входящие данные.',
        messagesUndoAction: 'Отменить',
        nodeMembersCount: '{ count, plural, one {1 член} few {# члена} other {# членов} } команды',
        nodeVariousTeams: 'Различные команды',
        nodeStatusDueToday: 'Срок выполнения сегодня',
        nodeStatusDueInXDays: 'Срок выполнения через { count, plural, one {1 день} few {# дня} other {# дней} }',
        nodeStatusXDaysOverdue: 'Просрочено на { count, plural, one {1 день} few {# дня} other {# дней} }',
        nodeActionAddApproversBefore: 'Добавить утверждающих до',
        nodeActionAddApproversAfter: 'Добавить утверждающих после',
        nodeActionAddApproversParallel: 'Добавить параллельных утверждающих',
        nodeActionEditApprover: 'Редактировать утверждающего',
        nodeActionRemove: 'Удалить',
        selectTypeDialogMoveApproverAs: 'Переместить утверждающего как',
        selectTypeDialogParallelOrSerial: 'Параллельный или последовательный',
        selectTypeDialogNodeTypeParallel: 'Параллельный утверждающий',
        selectTypeDialogNodeTypeSerial: 'Последовательный утверждающий',
        selectTypeDialogConfirmButton: 'Подтвердить',
        selectTypeDialogCancelButton: 'Отмена',
        toolbarAddStepButton: 'Добавить шаг',
        toolbarEditButton: 'Редактировать',
        toolbarAddApproversBefore: 'Добавить утверждающих до',
        toolbarAddApproversAfter: 'Добавить утверждающих после',
        toolbarAddApproversParallel: 'Добавить параллельных утверждающих',
        toolbarRemove: 'Удалить',
        toolbarEditApprover: 'Редактировать утверждающего',
        watchersInputPlaceholder: 'Поиск',
        userListSelectedItemsCountSingular: 'Выбран 1 элемент',
        userListSelectedItemsCountPlural:
            'Выбрано { count, plural, one {1 элемент} few {# элемента} other {# элементов} }',
        statusApproved: 'approved',
        statusRejected: 'rejected',
        statusInProgress: 'in progress',
        statusNotStarted: 'not started'
    },
    platformFeedInput: {
        userTitle: 'Пользователь'
    },
    platformVHD: {
        selectionBarLabel: 'Выбранные элементы и условия',
        selectedAndConditionLabel: 'Выбранные элементы и условия',
        footerClearSelectedTitle: 'очистить выбранные элементы',
        footerClearSelectedAriaLabel: 'очистить выбранные элементы',
        searchButtonLabel: 'Поиск',
        successButtonLabel: 'ОК',
        cancelButtonLabel: 'Отменить',
        selectedEmptyLabel: 'Не выбрано никаких элементов или условий',
        searchPlaceholder: 'Поиск',
        searchAdvancedSearchLabel: 'Фильтры',
        searchShowAdvancedSearchLabel: 'Показать фильтры',
        searchHideAdvancedSearchLabel: 'Скрыть фильтры',
        searchShowAllAdvancedSearchLabel: 'Показать все фильтры',
        searchHideAllAdvancedSearchLabel: 'Скрыть все фильтры',
        selectTabDisplayCountLabel: 'Элементы ({count})',
        selectTabMoreBtnLabel: 'Больше',
        selectTabCountHiddenA11yLabel:
            // eslint-disable-next-line max-len
            'содержит { rowCount, plural, one {1 строку} few {# строки} other {# строк} } и { colCount, plural, one {1 столбец} few {# столбца} other {# столбцов} }',
        selectMobileTabBackBtnTitle: 'Назад',
        selectMobileTabBtnOpenDialogLabel: 'Открыть диалоговое окно',
        selectMobileTabTitle: '{title} вкладка',
        selectMobileConditionEmpty: 'Пусто',
        defineConditionTitle: 'Продукт',
        defineConditionSelectedValueHiddenA11yLabel: 'выбранное значение {value}',
        defineConditionConditionsGroupHeaderInclude: 'Включающие условия',
        defineConditionConditionsGroupHeaderExclude: 'Исключительные условия',
        defineConditionFromPlaceholder: 'от',
        defineConditionToPlaceholder: 'до',
        defineConditionValuePlaceholder: 'значение',
        defineConditionRemoveConditionButtonTitle: 'Удалить условие',
        defineConditionAddConditionButtonLabel: 'Добавить',
        defineConditionAddConditionButtonTitle: 'Добавить условие',
        defineConditionConditionStrategyLabelContains: 'содержит',
        defineConditionConditionStrategyLabelEqualTo: 'равно',
        defineConditionConditionStrategyLabelBetween: 'между',
        defineConditionConditionStrategyLabelStartsWith: 'начинается с',
        defineConditionConditionStrategyLabelEndsWith: 'заканчивается на',
        defineConditionConditionStrategyLabelLessThan: 'меньше чем',
        defineConditionConditionStrategyLabelLessThanEqual: 'меньше чем или равно',
        defineConditionConditionStrategyLabelGreaterThan: 'больше чем',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'больше чем или равно',
        defineConditionConditionStrategyLabelEmpty: 'пусто',
        defineConditionConditionStrategyLabelNotEqualTo: 'не равно',
        defineConditionConditionStrategyLabelNotEmpty: 'не пусто',
        defineConditionMaxCountError: 'Введите значение не более { count, plural, one {1 символа} other {# символов} }',
        selectTabTitle: 'Выбрать из списка',
        searchTableEmptyMessage: 'Используйте поиск для получения результатов',
        defineTabTitle: 'Определить условия'
    },
    platformCombobox: {
        countListResultsSingular: '1 элемент',
        countListResultsPlural: '{ count, plural, one {1 элемент} few {# элемента} other {# элементов} }'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Выбрать опции',
        inputIconTitle: 'Выбрать опции',
        mobileShowAllItemsButton: 'Показать все элементы',
        mobileShowSelectedItemsButton: 'Показать выбранные элементы'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: 'Превышен лимит на 1 символ',
        counterMessageCharactersOverTheLimitPlural:
            'Превышен лимит на { count, plural, one {1 символ} few {# символа} other {# символов} }',
        counterMessageCharactersRemainingSingular: 'Остался 1 символ',
        counterMessageCharactersRemainingPlural:
            '{ count, plural, one {Остался 1 символ} few {Осталось # символа} other {Осталось # символов} }'
    },

    platformLink: {
        roleDescriptionWithMedia: 'Медиа: {media}'
    },
    platformList: {
        loadingAriaLabel: 'загрузка'
    },
    platformObjectListItem: {
        detailsActionAriaLabel: 'детали',
        deleteActionAriaLabel: 'удалить'
    },
    platformStandardListItem: {
        detailsActionAriaLabel: 'детали',
        deleteActionAriaLabel: 'удалить'
    },
    platformSearchField: {
        clearButtonTitle: 'Очистить',
        submitButtonTitle: 'Поиск',
        searchInputLabel: 'Поиск',
        synchronizeButtonTitle: 'Синхронизировать',
        searchSuggestionMessage:
            '{count, plural, one {Найден 1 вариант} few {Найдено # варианта} other {Найдено # вариантов} }',
        searchSuggestionNavigateMessage: 'используйте стрелки вверх и вниз для навигации'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Поиск',
        submitButtonLabel: 'Перейти',
        filtersButtonLabel: 'Фильтры ({filtersCount})',
        showFiltersButtonLabel: 'Показать фильтры',
        hideFiltersButtonLabel: 'Скрыть фильтры',
        defineConditionsRemoveConditionButtonTitle: 'Удалить условие',
        defineConditionsAddConditionButtonLabel: 'Добавить условие',
        defineConditionsSubmitButtonLabel: 'Перейти',
        defineConditionsCancelButton: 'Отменить',
        selectFiltersHeader: 'Фильтры',
        selectFiltersAvailableFiltersText: 'Доступные фильтры',
        selectFiltersFilterColumnLabel: 'Фильтр',
        selectFiltersActiveColumnLabel: 'Активный',
        selectFiltersSubmitButtonLabel: 'Перейти',
        selectFiltersCancelButton: 'Отменить',
        filterConditionContains: 'содержит',
        filterConditionEqualTo: 'равно',
        filterConditionBetween: 'между',
        filterConditionBeginsWith: 'начинается с',
        filterConditionEndsWith: 'заканчивается',
        filterConditionLessThan: 'меньше чем',
        filterConditionLessThanOrEqualTo: 'меньше или равно',
        filterConditionGreaterThan: 'больше чем',
        filterConditionGreaterThanOrEqualTo: 'больше или равно',
        filterConditionAfter: 'после',
        filterConditionOnOrAfter: 'равно или после',
        filterConditionBefore: 'до',
        filterConditionBeforeOrOn: 'до или равно',
        filterConditionValuePlaceholder: 'значение',
        filterConditionValueFromPlaceholder: 'от',
        filterConditionValueToPlaceholder: 'до',
        settingsCategoryAll: 'Все',
        settingsCategoryVisible: 'Видимые',
        settingsCategoryActive: 'Активные',
        settingsCategoryVisibleAndActive: 'Видимые и активные',
        settingsCategoryMandatory: 'Обязательные',
        manageFieldConditions: 'Показать условия для поля',
        refreshButtonAriaLabel: 'Обновить'
    },
    platformTable: {
        headerMenuSortAsc: 'Сортировать по возрастанию',
        headerMenuSortDesc: 'Сортировать по убыванию',
        headerMenuGroup: 'Сгруппировать',
        headerMenuFreeze: 'Заморозить',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'Разморозить',
        headerMenuFilter: 'Фильтр',
        defaultEmptyMessage: 'Ничего не найдено',
        emptyCell: 'Пусто',
        noVisibleColumnsMessage:
            'Сейчас в таблице нет видимых столбцов. Пожалуйста, выберите нужные столбцы в настройках таблицы.',
        resetChangesButtonLabel: 'Сбросить',
        editableCellNumberPlaceholder: 'Введите значение',
        editableCellDatePlaceholder: 'Введите значение',
        editableCellStringPlaceholder: 'Введите значение',
        P13ColumnsDialogHeader: 'Столбцы',
        P13ColumnsDialogSearchPlaceholder: 'Поиск',
        P13ColumnsDialogsShowSelected: 'Показать выбранное',
        P13ColumnsDialogShowAll: 'Показать все',
        P13ColumnsDialogSelectAll: 'Выбрать все ({selectedColumnsCount}/{selectableColumnsCount})',
        P13ColumnsDialogConfirmationBtnLabel: 'ОК',
        P13ColumnsDialogCancelBtnLabel: 'Отмена',
        P13ColumnsDialogMoveToTopBtn: 'Переместить вверх',
        P13ColumnsDialogMoveUpBtn: 'Переместить выше',
        P13ColumnsDialogMoveDownBtn: 'Переместить ниже',
        P13ColumnsDialogMoveToBottomBtn: 'Переместить вниз',
        P13FilterStrategyLabelBetween: 'между',
        P13FilterStrategyLabelContains: 'содержит',
        P13FilterStrategyLabelBeginsWith: 'начинается с',
        P13FilterStrategyLabelEndsWith: 'заканчивается на',
        P13FilterStrategyLabelEqualTo: 'равно',
        P13FilterStrategyLabelGreaterThan: 'больше чем',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'больше или равно',
        P13FilterStrategyLabelLessThan: 'меньше чем',
        P13FilterStrategyLabelLessThanOrEqualTo: 'меньше или равно',
        P13FilterStrategyLabelAfter: 'после',
        P13FilterStrategyLabelOnOrAfter: 'равно или после',
        P13FilterStrategyLabelBefore: 'до',
        P13FilterStrategyLabelBeforeOrOn: 'до или равно',
        P13FilterStrategyLabelNotDefined: 'Не определено',
        P13FilterBooleanOptionNotDefined: ' ',
        P13FilterBooleanOptionTrue: 'Да',
        P13FilterBooleanOptionFalse: 'Нет',
        P13FilterDialogHeader: 'Фильтровать по',
        P13FilterDialogIncludePanelTitleWithCount: 'Включающие условия ({count})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Включающие условия',
        P13FilterDialogExcludePanelTitleWithCount: 'Исключающие условия ({count})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Исключающие условия',
        P13FilterDialogRemoveFilterBtnTitle: 'Удалить фильтр',
        P13FilterDialoAddFilterBtnTitle: 'Добавить фильтр',
        P13FilterDialogConfirmationBtnLabel: 'ОК',
        P13FilterDialogCancelBtnLabel: 'Отмена',
        P13GroupDialogHeader: 'Группировка',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(нету)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Показать поле как столбец',
        P13GroupDialogRemoveGroupBtnTitle: 'Удалить',
        P13GroupDialogAddNewGroupBtnTitle: 'Добавить',
        P13GroupDialogConfirmationBtnLabel: 'ОК',
        P13GroupDialogCancelBtnLabel: 'Отмена',
        P13SortDialogHeader: 'Сортировка',
        P13SortDialogNoneSelectedColumn: '(нету)',
        P13SortDialogNoneSelectedSorting: '(нету)',
        P13SortDialogSortOrderSelectOptionAsc: 'По возрастанию',
        P13SortDialogSortOrderSelectOptionDesc: 'По убыванию',
        P13SortDialogRemoveSortBtnTitle: 'Удалить',
        P13SortDialogAddNewSortBtnTitle: 'Добавить',
        P13SortDialogConfirmationBtnLabel: 'ОК',
        P13SortDialogCancelBtnLabel: 'Отмена',
        toolbarSearchPlaceholder: 'Поиск',
        toolbarActionCreateButtonLabel: 'Создать',
        toolbarActionSaveButtonLabel: 'Сохранить',
        toolbarActionCancelButtonLabel: 'Отменить',
        toolbarActionSortButtonTitle: 'Сортировать',
        toolbarActionFilterButtonTitle: 'Фильтр',
        toolbarActionGroupButtonTitle: 'Группировка',
        toolbarActionColumnsButtonTitle: 'Столбцы',
        toolbarActionExpandAllButtonTitle: 'Expand all',
        toolbarActionCollapseAllButtonTitle: 'Collapse all',
        filterDialogNotFilteredLabel: '(Не отфильтровано)',
        filterDialogFilterByLabel: 'Фильтр: {filterLabel}',
        filterDialogFilterTitle: 'Фильтр',
        filterDialogFilterBy: 'Фильтровать по',
        filterDialogConfirmBtnLabel: 'ОК',
        filterDialogCancelBtnLabel: 'Отменить',
        groupDialogHeader: 'Группировка',
        groupDialogGroupOrderHeader: 'Порядок группировки',
        groupDialogGroupOrderAsc: 'По возрастанию',
        groupDialogGroupOrderDesc: 'По убыванию',
        groupDialogGroupByHeader: 'Группировать по',
        groupDialogNotGroupedLabel: '(Не сгруппировано)',
        groupDialogConfirmBtnLabel: 'ОК',
        groupDialogCancelBtnLabel: 'Отменить',
        sortDialogHeader: 'Сортировать',
        sortDialogSortOrderHeader: 'Порядок сортировки',
        sortDialogSortOrderAsc: 'По росту',
        sortDialogSortOrderDesc: 'по убыванию',
        sortDialogSortByHeader: 'Сортировать по',
        sortDialogNotSortedLabel: '(Не отсортировано)',
        sortDialogConfirmBtnLabel: 'ОК',
        sortDialogCancelBtnLabel: 'Отменить',
        selectAllCheckboxLabel: 'Select all',
        deselectAllCheckboxLabel: 'Deselect all',
        deselectSingleRow: 'To deselect row, press SPACEBAR',
        selectSingleRow: 'To select row, press SPACEBAR',
        deselectSingleRowTitle: 'Click to deselect',
        selectSingleRowTitle: 'Click to select'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'Перейти к предыдущему',
        detailsGotoNextButtonTitle: 'Перейти к следующему',
        detailsDialogCloseBtnLabel: 'Закрыть',
        roleDescription: 'Изображение'
    },
    platformUploadCollection: {
        moveToTitle: 'Переместить в',
        moveToTitleFolder: 'Папка',
        moveToNewFolderBtnLabel: 'Новая папка',
        moveToAllFilesSubHeaderLabel: 'Все файлы',
        moveToConfirmBtn: 'Переместить',
        moveToCloseBtn: 'Отменить',
        newFolderTitle: 'Новая папка',
        newFolderAtRootInputLabel: 'Название новой папки',
        newFolderAtFolderInputLabel: 'Название новой папки внутри {folderName }',
        newFolderInputPlaceholder: 'Введите имя..',
        newFolderInputErrorLabel:
            'Максимально разрешено { count, plural, one {1 символ} few {# символа} other {# символов} }',
        newFolderDialogCreateBtnLabel: 'Создать',
        newFolderDialogCancelBtnLabel: 'Отменить',
        breadcrumbLabelAllFiles: 'Все файлы',
        breadcrumbLabelAllFilesWithTotal: 'Все файлы ({total})',
        searchPlaceholder: 'Поиск',
        addBtnLabel: 'Добавить',
        newFolderBtnLabel: 'Новая папка',
        moveToBtnLabel: 'Переместить в',
        downloadBtnLabel: 'Загрузить',
        updateVersionBtnLabel: 'Обновить версию',
        removeBtnLabel: 'Удалить',
        folderIconTitle: 'Значок папки',
        fileIconTitle: 'Значок файла',
        editFileNameInputPlaceholder: 'Введите название',
        editFileNameFileAlreadyExistsError: 'Файл с таким названием уже существует',
        editFileNameFolderAlreadyExistsError: 'Папка с таким именем уже существует',
        itemStatusSuccessful: 'Успешно',
        itemStatusUnsuccessful: 'Неудачно',
        uploadNewFileAfterFailAction: 'Выполнить',
        cancelUploadNewFileAction: 'Отменить',
        itemMenuBtnTitle: 'Больше',
        dragDropAreaText: 'Перетащите файлы для загрузки',
        noDataText: 'Файлы не найдены',
        noDataDescription: 'Перетащите файлы для загрузки или воспользуйтесь кнопкой «Добавить».',
        paginationTotal: 'Показано {from}-{to} из {total}',
        resultsPerPage: 'Результаты на странице',
        messageCreateFailed: 'Не удалось создать {folderName}.',
        messageCreateSuccess: '{folderName} успешно создано.',
        messageUpdateVersionFailed: 'Не удалось обновить версию {folderName}.',
        messageUpdateVersionSuccess: 'Версия {folderName} обновлена.',
        messageFileRenameFailed: 'Не удалось переименовать "{from}" в "{to}."',
        messageFileRenameSuccess: '{from}" переименовано в "{to}".',
        folderNamePluralization: '{ foldersCount, plural, one {1 папку} few {# папки} other {# папок} }',
        fileNamePluralization: '{ filesCount, plural, one {1 файл} few {# файла} other {# файлов} }',
        messageRemoveFoldersAndFilesFailed: `Не удалось удалить {@@platformUploadCollection.folderNamePluralization} и {@@platformUploadCollection.fileNamePluralization}.`,
        messageRemoveFoldersAndFilesSuccess: `{@@platformUploadCollection.folderNamePluralization} и {@@platformUploadCollection.fileNamePluralization} удалено.`,
        messageRemoveFoldersFailed: `Не удалось удалить {@@platformUploadCollection.folderNamePluralization}.`,
        messageRemoveFoldersSuccess: `Удалено {@@platformUploadCollection.folderNamePluralization}.`,
        messageRemoveFilesFailed: 'Не удалось удалить файлы {filesCount}.',
        messageRemoveFilesSuccess: `Удалено {@@platformUploadCollection.fileNamePluralization}.`,
        messageRemoveFileOrFolderFailed: 'Не удалось удалить {name}.',
        messageRemoveFileOrFolderSuccess: '{name} удалено.',
        messageMoveFoldersAndFilesFailed: `Не удалось переместить {@@platformUploadCollection.folderNamePluralization} и {@@platformUploadCollection.fileNamePluralization} в {to}.`,
        messageMoveFoldersAndFilesSuccess: `{@@platformUploadCollection.folderNamePluralization} и {@@platformUploadCollection.fileNamePluralization} перемещены в {to}.`,
        messageMoveFoldersFailed: `Не удалось переместить {@@platformUploadCollection.folderNamePluralization} в {to}.`,
        messageMoveFoldersSuccess: `{@@platformUploadCollection.folderNamePluralization} перемещен в {to}.`,
        messageMoveFilesFailed: `Не удалось переместить {@@platformUploadCollection.fileNamePluralization} в {to}.`,
        messageMoveFilesSuccess: `{@@platformUploadCollection.fileNamePluralization} перемещен в {to}.`,
        messageMoveFileOrFolderFailed: 'Не удалось переместить {name} в {to}.',
        messageMoveFileOrFolderSuccess: '{name} перемещен в {to}.',
        messageMoveRootFoldersAndFilesFailed: `Не удалось переместить {@@platformUploadCollection.folderNamePluralization} и {@@platformUploadCollection.fileNamePluralization} во все файлы.`,
        messageMoveRootFoldersAndFilesSuccess: `{@@platformUploadCollection.folderNamePluralization} и {@@platformUploadCollection.fileNamePluralization} перемещены ко всем файлам.`,
        messageMoveRootFoldersFailed: `Не удалось переместить {@@platformUploadCollection.folderNamePluralization} во все файлы.`,
        messageMoveRootFoldersSuccess: `{@@platformUploadCollection.folderNamePluralization} перемещен ко всем файлам.`,
        messageMoveRootFilesFailed: `Не удалось переместить {@@platformUploadCollection.fileNamePluralization} во все файлы.`,
        messageMoveRootFilesSuccess: `{@@platformUploadCollection.fileNamePluralization} перемещены ко всем файлам.`,
        messageMoveRootFileOrFolderFailed: 'Не удалось переместить {name} во все файлы.',
        messageMoveRootFileOrFolderSuccess: '{name} перемещен ко всем файлам.',
        messageFileTypeMismatchPlural:
            '{ filesCount, plural, one {1 файл} few {# файла} other {# файлов} } неправильный тип. Разрешенные типы: {allowedTypes}.',
        messageFileTypeMismatchSingular: 'Файл "{fileName}" имеет неправильный тип. Разрешенные типы: {allowedTypes}.',
        messageFileSizeExceededPlural:
            // eslint-disable-next-line max-len
            '{ filesCount, plural, one {1 файл превышает} few {# файла превышают} other {# файлов превышают} } максимальный размер файла. Разрешен максимальный размер файла: {maxFileSize}.',
        messageFileSizeExceededSingular:
            'Файл "{fileName}" превышает максимальный размер файла. Разрешен максимальный размер файла: {maxFileSize}.',
        messageFileNameLengthExceededPlural:
            // eslint-disable-next-line max-len
            '{ filesCount, plural, one {1 файл превысил} few {# файла превысили} other {# файлов превысили} } максимальную длину имени файла. Разрешена длина имени файла: {maxFilenameLength} символов.',
        messageFileNameLengthExceededSingular:
            'Имя "{fileName}" превышает максимальную длину имени файла. Разрешена длина имени файла: {maxFilenameLength} символов.'
    },
    platformWizardGenerator: {
        summarySectionEditStep: 'Редактировать'
    },
    platformMessagePopover: {
        allErrors: 'Все',
        defaultErrors: {
            email: 'Значение поля не соответствует формату E-mail',
            max: 'Значение поля превышает максимально допустимое',
            maxLength: 'Длина значения поля превышает максимально допустимое',
            min: 'Значение поля меньше минимально допустимого',
            minLength: 'Длина значения поля меньше максимально допустимого',
            pattern: 'Поле не соответствует формату',
            required: 'Обязательное поле',
            requiredTrue: 'Обязательное поле'
        }
    },
    platformVariantManagement: {
        manage: 'Управление',
        saveAs: 'Сохранить как',
        saveView: 'Сохранить Вид',
        save: 'Сохранить',
        myViews: 'Мои Виды',
        view: 'Вид',
        setAsDefault: 'Установить по умолчанию',
        public: 'Публичный',
        applyAutomatically: 'Применять автоматически',
        requiredFieldError: 'Обязательное поле.',
        nameTakenFieldError: 'Вид с таким именем уже существует. Введите другое имя.',
        cancel: 'Отменить',
        manageViews: 'Управление видами',
        markAsFavourite: 'Отметить как избранное',
        sharing: 'Совместное использование',
        default: 'По умолчанию',
        createdBy: 'Создал(а)',
        removeVariant: 'Удалить вид',
        search: 'Поиск',
        access: {
            public: 'Публичное',
            private: 'Приватное'
        }
    },
    platformSelect: {
        selectOptionLabel: 'Выберите вариант'
    },
    fnSlider: {
        minMaxDetails: 'Минимальное значение слайдера {min}, максимальное значение {max}',
        valueminDetails: 'Значение равно {value}',
        valuemaxDetails: 'Значение равно {value}',
        valueNowDetails: 'Текущее значение: {value}'
    },
    fnSwitch: {
        semanticAcceptLabel: 'Принять',
        semanticDeclineLabel: 'Отклонить'
    },
    coreTree: {
        expand: 'Развернуть узел',
        collapse: 'Свернуть узел',
        noData: 'Нет данных'
    }
};
